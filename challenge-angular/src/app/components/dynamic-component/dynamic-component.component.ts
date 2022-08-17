import {
  Component,
  ComponentDecorator,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form/interfaces/form-field';
import { DynamicElementDirective } from './directives/dynamic-element/dynamic-element.directive';
import { DynamicFormElementDirective } from './directives/dynamic-form-element/dynamic-form-element.directive';
import { DynamicDirective } from './directives/dynamic/dynamic.directive';
import { DynamicService } from './services/dynamic/dynamic.service';

@Component({
  selector: '[app-dynamic-component]',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss'],
})
export class DynamicComponentComponent implements OnInit {
  @Input() data!: unknown;
  @Input() formGroup?: FormGroup;

  @ViewChild(DynamicDirective, { static: true }) dynamic!: DynamicDirective;
  constructor(private dynamicService: DynamicService) {}

  ngOnInit(): void {
    const hasFormGroup = !!this.formGroup;

    const viewRef = this.dynamic.viewContainerRef;
    viewRef.clear();

    const component = this.dynamicService.getComponent(
      this.data,
      hasFormGroup
    ) as ComponentDecorator;

    const componentRef = viewRef.createComponent(component);

    (componentRef.instance as DynamicElementDirective).data = this
      .data as FormField;

    if (hasFormGroup) {
      (componentRef.instance as DynamicFormElementDirective).formGroup = this
        .formGroup as FormGroup;
    }
  }
}
