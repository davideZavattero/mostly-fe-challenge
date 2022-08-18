import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { AddJobComponent } from '../../components/add-job/add-job.component';
import { ApiEndpoints } from '../../enums/api-endpoints';
import { Job, Job as JobObj, JobName, JobsList } from '../../interfaces/job';
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

  private jobObj: JobsList = {};
  private jobList: Job[] = [];

  private JobSubject: Subject<JobsList> = new Subject();

  getToken(): string {
    return <string>this.authService.getToken();
  }
  getJobList(): Observable<Job[]> {
    const url = this.apiUrlService.getUrl(ApiEndpoints.JOBS);
    return this.httpService.get(url, this.getToken()) as Observable<Job[]>;
  }

  getJobs(): Observable<JobsList> {
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
}
