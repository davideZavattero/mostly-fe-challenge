import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-jobs',
  templateUrl: './no-jobs.component.html',
  styleUrls: ['./no-jobs.component.scss'],
})
export class NoJobsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick(_evt: MouseEvent) {
    console.log('click!');
  }
}
