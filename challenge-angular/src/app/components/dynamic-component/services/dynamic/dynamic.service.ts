import { Injectable } from '@angular/core';
import { FormFieldTypes } from '../../../form/enums/form-field-types';
import { FormField, InputFormField } from '../../../form/interfaces/form-field';

@Injectable()
export class DynamicService {
  constructor() {}

  getComponent(data: unknown, hasFormGroup: boolean): unknown {
    console.log(data);
    if (hasFormGroup) {
      const formElement = data as FormField | InputFormField;
      if (formElement.type === FormFieldTypes.INPUT) {
        return (formElement as InputFormField).inputType;
      }
      return formElement.type;
    }
    return null;
  }
}
