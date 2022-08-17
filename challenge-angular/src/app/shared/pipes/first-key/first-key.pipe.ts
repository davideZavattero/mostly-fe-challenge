import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstKey',
})
export class FirstKeyPipe implements PipeTransform {
  transform(value: any): string {
    const arr = Object.keys(value) || [];
    if (arr.length === 0) {
      return '';
    }

    return arr[0];
  }
}
