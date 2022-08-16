import { Component, OnInit } from '@angular/core';
import { FormField } from '../../components/form/interfaces/form-field';
import { loginForm } from '../../static/login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formList: FormField[] = loginForm;

  constructor() {}

  ngOnInit(): void {}
}
