import { Injectable } from '@angular/core';
import { DynamicElement } from '../../../../interfaces/dynamic-element';
import { FormFieldTypes } from '../../../form/enums/form-field-types';
import { InputFieldTypesComponent } from '../../../form/enums/input-field-types';
import { FormField, InputFormField } from '../../../form/interfaces/form-field';

@Injectable()
export class DynamicService {
  constructor() {}

  getComponent(data: unknown, hasFormGroup: boolean): unknown {
    if (hasFormGroup) {
      const formElement = data as FormField | InputFormField;
      if (formElement.type === FormFieldTypes.INPUT) {
        return InputFieldTypesComponent[
          (formElement as InputFormField).inputType
        ];
      }
      return formElement.type;
    }
    const dynEl = data as DynamicElement;
    return dynEl?.type || null;
  }
}
