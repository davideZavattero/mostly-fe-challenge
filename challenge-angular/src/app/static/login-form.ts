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
        [Validators.required.name]: 'form.error.emailRequired',
        [Validators.email.name]: 'form.error.emailWrong',
      },
    },
  } as InputFormField,
  {
    type: FormFieldTypes.INPUT,
    inputType: InputFieldTypes.PASSWORD,
    id: 'user-login-password',
    name: 'password',
    label: 'login.password.label',
    required: true,
    errors: {
      validators: [Validators.required],
      customErrorsText: {
        [Validators.required.name]: 'form.error.passwordRequired',
      },
    },
  } as InputFormField,
];
