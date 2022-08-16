import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentComponent } from './dynamic-component.component';



@NgModule({
  declarations: [
    DynamicComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicComponentComponent
  ]
})
export class DynamicComponentModule { }
