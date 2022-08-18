import { Component, Input, OnInit } from '@angular/core';
import { Iconlist } from '../../enums/iconlist';

@Component({
  selector: 'app-job-progress',
  templateUrl: './job-progress.component.html',
  styleUrls: ['./job-progress.component.scss'],
})
export class JobProgressComponent implements OnInit {
  @Input() value!: string | number;
  iconComplete = Iconlist.CHECK;
  constructor() {}

  ngOnInit(): void {}
}
