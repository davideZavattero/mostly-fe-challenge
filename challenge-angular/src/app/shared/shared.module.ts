import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from '../components/loading/loading.component';
import { ButtonComponent } from './components/button/button.component';
import { FirstKeyPipe } from './pipes/first-key/first-key.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from './components/modal/modal.component';
import { IconComponent } from './components/icon/icon.component';
import { DynamicComponentModule } from '../components/dynamic-component/dynamic-component.module';

@NgModule({
  declarations: [
    ButtonComponent,
    FirstKeyPipe,
    LoadingComponent,
    ModalComponent,
    IconComponent,
  ],
  imports: [CommonModule, TranslateModule, DynamicComponentModule],
  exports: [
    ButtonComponent,
    FirstKeyPipe,
    LoadingComponent,
    ModalComponent,
    IconComponent,
  ],
})
export class SharedModule {}
