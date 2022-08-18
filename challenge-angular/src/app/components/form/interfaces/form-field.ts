import { ValidatorFn } from '@angular/forms';
import { FormFieldTypes } from '../enums/form-field-types';
import { InputFieldTypes } from '../enums/input-field-types';

export interface FormField {
  type: FormFieldTypes;
  name: string;
  id: string;
  label: string;
  required?: boolean;
  errors?: FormFieldErrors;
  customClasses?: string[];
  placeHolder?: string;
  defaultValue?: unknown;
  focus?: boolean;
}

export interface FormFieldErrors {
  validators: ValidatorFn[];
  customErrorsText: { [key: string]: string };
}

export interface InputFormField extends FormField {
  inputType: InputFieldTypes;
}
