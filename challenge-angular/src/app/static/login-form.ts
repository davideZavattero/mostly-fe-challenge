import { Validators } from '@angular/forms';
import { FormFieldTypes } from '../components/form/enums/form-field-types';
import { FormField } from '../components/form/interfaces/form-field';

export const loginForm: FormField[] = [
  {
    type: FormFieldTypes.INPUT,
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
  },
];
