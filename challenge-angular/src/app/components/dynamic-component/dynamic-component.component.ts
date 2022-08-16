import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-dynamic-component]',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss'],
})
export class DynamicComponentComponent implements OnInit {
  @Input() data!: unknown;

  constructor() {}

  ngOnInit(): void {}
}
