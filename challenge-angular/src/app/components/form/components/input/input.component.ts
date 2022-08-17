import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { DynamicFormElementDirective } from '../../../dynamic-component/directives/dynamic-form-element/dynamic-form-element.directive';
import { InputFieldTypes } from '../../enums/input-field-types';
import { FormField, InputFormField } from '../../interfaces/form-field';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent
  extends DynamicFormElementDirective
  implements OnInit
{
  @Input() override data!: InputFormField;

  defaultId: string = this.getId();
  constructor(elementRef: ViewContainerRef) {
    super(elementRef);
  }

  ngOnInit(): void {
    console.log('eeeeee', InputFieldTypes[this.data.inputType]);
  }
}
