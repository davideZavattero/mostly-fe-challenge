import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { DynamicComponentModule } from '../dynamic-component/dynamic-component.module';
import { FormService } from './services/form/form.service';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, DynamicComponentModule],
  exports: [FormComponent],
  providers: [FormService],
})
export class FormModule {}
