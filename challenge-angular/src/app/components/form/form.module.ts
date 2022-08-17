import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicComponentModule } from '../dynamic-component/dynamic-component.module';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { FormComponent } from './form.component';
import { FormService } from './services/form/form.service';

@NgModule({
  declarations: [
    FormComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    TextAreaComponent,
  ],
  imports: [CommonModule, DynamicComponentModule],
  exports: [
    FormComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    TextAreaComponent,
  ],
  providers: [FormService],
})
export class FormModule {}
