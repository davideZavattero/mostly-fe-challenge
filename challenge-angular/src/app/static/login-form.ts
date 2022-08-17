import { Validators } from '@angular/forms';
import { FormFieldTypes } from '../components/form/enums/form-field-types';
import { InputFieldTypes } from '../components/form/enums/input-field-types';
import {
  FormField,
  InputFormField,
} from '../components/form/interfaces/form-field';

export const loginForm: FormField[] = [
  {
    type: FormFieldTypes.INPUT,
    inputType: InputFieldTypes.EMAIL,
    id: 'user-login-email',
    name: 'email',
    label: 'login.email.label',
    required: true,
    errors: {
      validators: [Validators.required, Validators.email],
      customErrorsText: {
        [Validators.required.toString()]: 'form.error.emailRequired',
        [Validators.email.toString()]: 'form.error.emailWrong',
      },
    },
  } as InputFormField,
];
