import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { FormModule } from '../../components/form/form.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],

  imports: [CommonModule, LoginRoutingModule, FormModule, TranslateModule],
})
export class LoginModule {}
