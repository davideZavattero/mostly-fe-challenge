import { ComponentDecorator } from '@angular/core';

export interface DynamicElement {
  type: unknown;
  [key: string]: unknown;
}
