import { Component, Input, OnInit } from '@angular/core';
import { Iconlist } from '../../../enums/iconlist';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() icon!: Iconlist;

  constructor() {}

  ngOnInit(): void {}
}
