import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../interfaces/job';

@Component({
  selector: '[app-job-status]',
  templateUrl: './job-status.component.html',
  styleUrls: ['./job-status.component.scss'],
})
export class JobStatusComponent implements OnInit {
  @Input() data!: Job;

  constructor() {}

  ngOnInit(): void {}
}
