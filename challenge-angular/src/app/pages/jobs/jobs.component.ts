import { Component, OnInit } from '@angular/core';
import { JobListComponent } from '../../components/job-list/job-list.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { NoJobsComponent } from '../../components/no-jobs/no-jobs.component';
import { DynamicElement } from '../../interfaces/dynamic-element';
import { Job } from '../../interfaces/job';
import { JobsService } from '../../services/jobs/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  componentsType: { [key: string]: DynamicElement } = {
    loading: { type: LoadingComponent },
    jobs: { type: JobListComponent, jobList: [] },
    noJobs: { type: NoJobsComponent },
  };
  currentComponent = this.componentsType['loading'];

  jobList: Job[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    this.currentComponent = this.componentsType['loading'];
    this.jobsService.getJobList().subscribe({
      next: (el) => {
        console.log(el);
        this.jobList = el;
        if (el.length === 0) {
          this.currentComponent = this.componentsType['noJobs'];
        } else {
          this.componentsType['jobs']['jobList'] = el;
          this.currentComponent = this.componentsType['jobs'];
        }
      },
      error: (error) => {
        console.error('Error!!', error);
      },
    });
  }
}
