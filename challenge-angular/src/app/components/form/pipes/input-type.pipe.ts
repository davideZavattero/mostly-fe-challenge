import { Pipe, PipeTransform } from '@angular/core';
import {
  InputFieldTypes,
  InputFieldTypesName,
} from '../enums/input-field-types';

@Pipe({
  name: 'inputType',
})
export class InputTypePipe implements PipeTransform {
  transform(value: InputFieldTypes): any {
    const k: any = InputFieldTypes[value];
    return InputFieldTypesName[k] || InputFieldTypesName.TEXT;
  }
}
