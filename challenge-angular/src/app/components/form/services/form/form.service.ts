import { Injectable } from '@angular/core';
import {
  FormControl,
  FormControlOptions,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormField } from '../../interfaces/form-field';

@Injectable()
export class FormService {
  constructor() {}

  generateFormGroup(formFields: FormField[]): FormGroup {
    console.log('aeeeee', formFields);
    const formControls = this.generateFormControls(formFields);
    return new FormGroup(formControls);
  }

  generateFormControls(formFields: FormField[]): {
    [key: string]: FormControl;
  } {
    const formControlObject: { [key: string]: FormControl } = {};
    formFields.forEach((el) => {
      formControlObject[el.name] = this.generateFormControl(el);
    });
    return formControlObject;
  }

  generateFormControl(field: FormField): FormControl {
    const formControlOptions: FormControlOptions = {};
    if (field.errors?.validators) {
      formControlOptions.validators = field.errors.validators;
    }

    return new FormControl(field?.defaultValue || null, formControlOptions);
  }
}
