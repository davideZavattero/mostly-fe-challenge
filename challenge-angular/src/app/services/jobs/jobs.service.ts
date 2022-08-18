import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddJobComponent } from '../../components/add-job/add-job.component';
import { ApiEndpoints } from '../../enums/api-endpoints';
import { Job } from '../../interfaces/job';
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

  getJobList(): Observable<Job[]> {
    const url = this.apiUrlService.getUrl(ApiEndpoints.JOBS);
    const token: string = this.authService.getToken() as string;
    return this.httpService.get(url, token) as Observable<Job[]>;
  }

  addNewJob() {
    this.modalService.open({
      type: AddJobComponent,
    });
  }
}
