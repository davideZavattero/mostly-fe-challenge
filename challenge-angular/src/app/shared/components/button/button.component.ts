import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonsType } from '../../../enums/buttons-type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input() type = ButtonsType.BUTTON;
  @Input() disabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
