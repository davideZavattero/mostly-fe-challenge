import { Validators } from '@angular/forms';
import { FormFieldTypes } from '../components/form/enums/form-field-types';
import { InputFieldTypes } from '../components/form/enums/input-field-types';
import {
  FormField,
  InputFormField,
} from '../components/form/interfaces/form-field';

export const addJobForm: FormField[] = [
  {
    type: FormFieldTypes.INPUT,
    inputType: InputFieldTypes.TEXT,
    id: 'add-job-name',
    name: 'name',
    label: 'addJob.name.label',
    required: true,

    errors: {
      validators: [Validators.required],
      customErrorsText: {
        [Validators.required.name]: 'addJob.name.errorRequired',
      },
    },
  } as InputFormField,
];
