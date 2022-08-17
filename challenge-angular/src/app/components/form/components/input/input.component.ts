import { Component, OnInit } from '@angular/core';
import { DynamicFormElementDirective } from '../../../dynamic-component/directives/dynamic-form-element/dynamic-form-element.directive';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent
  extends DynamicFormElementDirective
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
