import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { FirstKeyPipe } from './pipes/first-key/first-key.pipe';

@NgModule({
  declarations: [ButtonComponent, FirstKeyPipe],
  imports: [CommonModule],
  exports: [ButtonComponent, FirstKeyPipe],
})
export class SharedModule {}
