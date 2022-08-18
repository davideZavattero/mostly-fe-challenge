import { Component, ElementRef, OnInit } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent extends InputComponent implements OnInit {
  override ngOnInit(): void {
    this.formGroup.get(this.data.name)?.valueChanges.subscribe((res) => {
      console.log('reees', res);
    });
  }
}
