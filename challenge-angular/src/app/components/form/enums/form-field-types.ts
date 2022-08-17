import { SelectComponent } from '../components/select/select.component';
import { TextAreaComponent } from '../components/text-area/text-area.component';

export enum FormFieldTypes {
  INPUT,
  TEXTAREA = <any>TextAreaComponent,
  SELECT = <any>SelectComponent,
}
