import { Directive, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicElementDirective } from '../dynamic-element/dynamic-element.directive';

@Directive({
  selector: '[appDynamicFormElement]',
})
export class DynamicFormElementDirective extends DynamicElementDirective {
  @Input() formGroup!: FormGroup;
}
