import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormElementDirective } from './directives/dynamic-form-element/dynamic-form-element.directive';
import { DynamicDirective } from './directives/dynamic/dynamic.directive';
import { DynamicComponentComponent } from './dynamic-component.component';
import { DynamicService } from './services/dynamic/dynamic.service';

@NgModule({
  declarations: [
    DynamicComponentComponent,
    DynamicDirective,
    DynamicFormElementDirective,
  ],
  imports: [CommonModule],
  providers: [DynamicService],
  exports: [DynamicComponentComponent, DynamicFormElementDirective],
})
export class DynamicComponentModule {}
