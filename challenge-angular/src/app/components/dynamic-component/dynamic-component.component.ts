import {
  Component,
  ComponentDecorator,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicElement } from '../../interfaces/dynamic-element';
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
  @Input() hasFormGroup: boolean = false;
  @Input() formGroup?: FormGroup;

  private _data!: unknown;
  @Input() set data(val: unknown) {
    if (
      val &&
      typeof (val as DynamicElement).type !== 'undefined' &&
      val !== this._data
    ) {
      this._data = val;
      this.createComponent(val);
    }
  }
  get data(): unknown {
    return this._data;
  }

  notCalled = true;

  @ViewChild(DynamicDirective, { static: true }) dynamic!: DynamicDirective;
  constructor(private dynamicService: DynamicService) {}

  ngOnInit(): void {
    if (this.notCalled) {
      this.createComponent(this.data);
    }
  }

  createComponent(data: unknown) {
    this.notCalled = false;

    const viewRef = this.dynamic.viewContainerRef;
    viewRef.clear();

    const component = this.dynamicService.getComponent(
      data,
      this.hasFormGroup
    ) as ComponentDecorator;

    const componentRef = viewRef.createComponent(component);

    (componentRef.instance as DynamicElementDirective).data = this
      .data as FormField;

    if (this.hasFormGroup) {
      (componentRef.instance as DynamicFormElementDirective).formGroup = this
        .formGroup as FormGroup;
    }
  }
}
