import { Directive, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../../form/interfaces/form-field';
import { DynamicElementDirective } from '../dynamic-element/dynamic-element.directive';

@Directive({
  selector: '[appDynamicFormElement]',
})
export class DynamicFormElementDirective extends DynamicElementDirective {
  @Input() override data!: FormField;
  @Input() formGroup!: FormGroup;
  constructor(private viewContainerRef: ViewContainerRef) {
    super();
  }
  getId() {
    const el: any = Object.values(
      this.viewContainerRef.element.nativeElement.attributes
    ).find((el: any) => el.nodeName.indexOf('nghost') > 0);
    return el.nodeName;
  }
}
