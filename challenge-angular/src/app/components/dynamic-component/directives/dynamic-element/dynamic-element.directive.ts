import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appDynamicElement]',
})
export class DynamicElementDirective {
  @Input() data!: unknown;
}
