import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
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
  constructor(
    viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef
  ) {
    super(viewContainerRef);
  }

  ngOnInit(): void {
    if (this.data.focus) {
      this.elementRef.nativeElement
        .getElementsByTagName('input')
        .item(0)
        .focus();
    }
  }
}
