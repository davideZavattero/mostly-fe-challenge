import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from '../components/loading/loading.component';
import { ButtonComponent } from './components/button/button.component';
import { FirstKeyPipe } from './pipes/first-key/first-key.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ButtonComponent, FirstKeyPipe, LoadingComponent],
  imports: [CommonModule, TranslateModule],
  exports: [ButtonComponent, FirstKeyPipe, LoadingComponent],
})
export class SharedModule {}
