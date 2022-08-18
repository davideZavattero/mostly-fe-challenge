import { Injectable } from '@angular/core';
import { from, map, Observable, raceWith, Subject, zip } from 'rxjs';
import { AddJobComponent } from '../../components/add-job/add-job.component';
import { ApiEndpoints } from '../../enums/api-endpoints';
import {
  Job,
  Job as JobObj,
  JobName,
  JobProgress,
  JobsList,
} from '../../interfaces/job';
import { ApiUrlService } from '../api-url/api-url.service';
import { AuthService } from '../auth/auth.service';
import { HttpService } from '../http/http.service';
import { ModalService } from '../modal/modal.service';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(
    private authService: AuthService,
    private apiUrlService: ApiUrlService,
    private httpService: HttpService,
    private modalService: ModalService
  ) {}

  jobObj: JobsList = {};
  jobList: Job[] = [];
  uncompleteList: Job[] = [];

  private JobSubject: Subject<JobsList> = new Subject();
  private pollingSubscription!: ReturnType<typeof setTimeout>;

  getToken(): string {
    return <string>this.authService.getToken();
  }

  getJobFromBe(): Observable<Job[]> {
    const url = this.apiUrlService.getUrl(ApiEndpoints.JOBS);
    return this.httpService.get(url, this.getToken()) as Observable<Job[]>;
  }

  getJobs(load: boolean = true): Observable<JobsList> {
    if (load) {
      this.getJobFromBe().subscribe({
        next: (res) => {
          this.updateJobList(res);
          this.polling();
        },
        error: (err) => {
          console.error(err);
          this.JobSubject.error(err);
        },
      });
    }
    return this.JobSubject.asObservable();
  }

  setJobs(jobObj: JobsList) {
    this.JobSubject.next(jobObj);
  }

  updateJobList(newJobs: JobObj[]) {
    newJobs.forEach((el) => {
      this.jobObj[el.id] = el;
    });
    this.jobList = Object.values(this.jobObj);
    this.uncompleteList = this.jobList.filter((el) => el.progress < 100);
    this.setJobs(this.jobObj);
  }

  addNewJob() {
    this.modalService.open({
      type: AddJobComponent,
    });
  }

  sendNewJob(name: JobName) {
    const url = this.apiUrlService.getUrl(ApiEndpoints.JOBS);
    const call = this.httpService.post(
      url,
      name,
      this.getToken()
    ) as Observable<Job>;
    return call.pipe(
      map((el: Job) => {
        this.updateJobList([el]);
        return el;
      })
    );
  }

  polling() {
    const url = this.apiUrlService.getUrl(ApiEndpoints.JOBS_PROGRESS);
    this.pollingSubscription = setInterval(() => {
      const callList = this.uncompleteList.map((el) => {
        const idUrl = `${url}/${el.id}`;
        return this.httpService.get(idUrl, this.getToken());
      });
      zip(callList).subscribe((res) => {
        const progressList = res as JobProgress[];

        const resultList = progressList.map((el, i) => {
          if (this.uncompleteList[i].progress > el.progress) {
            console.warn('error', progressList, this.uncompleteList, i);
          }
          return { ...this.uncompleteList[i], ...el };
        });
        this.updateJobList(resultList);
      });
    }, 800);
  }

  destroyPolling() {
    clearInterval(this.pollingSubscription);
  }
}
