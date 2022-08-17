import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormField } from '../../components/form/interfaces/form-field';
import { Pages } from '../../enums/pages';
import { HttpLoginData } from '../../interfaces/http-login-data';
import { AuthService } from '../../services/auth/auth.service';
import { loginForm } from '../../static/login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formList: FormField[] = loginForm;
  disabled = false;
  showError = false;
  errorText: string = 'login.serverFailure';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(data: HttpLoginData) {
    console.log('eeeeeeeeee', data);
    this.disabled = true;
    this.showError = false;
    this.authService.logUserIn(data).subscribe({
      next: (res) => {
        this.router.navigate([Pages.ROOT]);
      },
      error: (err) => {
        console.error(err);
        this.disabled = false;
        this.showError = true;
      },
    });
  }
}
