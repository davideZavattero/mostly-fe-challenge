import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicComponentModule } from '../dynamic-component/dynamic-component.module';
import { SharedModule } from '../../shared/shared.module';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { FormComponent } from './form.component';
import { FormService } from './services/form/form.service';
import { InputTypePipe } from './pipes/input-type.pipe';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    FormComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    TextAreaComponent,
    InputTypePipe,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    DynamicComponentModule,
  ],
  exports: [
    FormComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    TextAreaComponent,
    ErrorComponent,
  ],
  providers: [FormService],
})
export class FormModule {}
