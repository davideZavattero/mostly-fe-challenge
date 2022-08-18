import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job, JobsList } from '../../interfaces/job';
import { JobsService } from '../../services/jobs/jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {
  jobList = this.jobService.jobObj;
  baseId: string = this.constructor.name;

  headers = {
    id: 'jobs.id',
    name: 'jobs.name',
    progress: 'jobs.progress',
  };

  constructor(private jobService: JobsService) {}

  ngOnInit(): void {}

  itemById(index: string, item: Job) {
    return item.id;
  }
}
