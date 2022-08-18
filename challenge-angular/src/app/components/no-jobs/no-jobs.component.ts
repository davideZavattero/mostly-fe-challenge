import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs/jobs.service';

@Component({
  selector: 'app-no-jobs',
  templateUrl: './no-jobs.component.html',
  styleUrls: ['./no-jobs.component.scss'],
})
export class NoJobsComponent implements OnInit {
  constructor(private jobService: JobsService) {}

  ngOnInit(): void {}

  onClick(_evt: MouseEvent) {
    this.jobService.addNewJob();
  }
}
