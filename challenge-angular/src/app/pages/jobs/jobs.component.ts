import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobListComponent } from '../../components/job-list/job-list.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { NoJobsComponent } from '../../components/no-jobs/no-jobs.component';
import { DynamicElement } from '../../interfaces/dynamic-element';
import { Job, JobsList } from '../../interfaces/job';
import { JobsService } from '../../services/jobs/jobs.service';

export const componentsType: { [key: string]: DynamicElement } = {
  loading: { type: LoadingComponent },
  jobs: { type: JobListComponent },
  noJobs: { type: NoJobsComponent },
};

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit, OnDestroy {
  private jobSubscription!: Subscription;
  currentComponent = componentsType['loading'];
  jobList: JobsList = {};

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    this.currentComponent = componentsType['loading'];

    this.jobSubscription = this.jobsService.getJobs().subscribe({
      next: (el) => {
        if (Object.keys(el).length > 0) {
          this.currentComponent = componentsType['jobs'];
        } else {
          this.currentComponent = componentsType['noJobs'];
        }
      },
      error: (error) => {
        console.error('Error!!', error);
      },
    });
  }

  add() {
    this.jobsService.addNewJob();
  }

  ngOnDestroy(): void {
    this.jobSubscription.unsubscribe();
    this.jobsService.destroyPolling();
  }
}
