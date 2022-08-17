import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormField } from '../interfaces/form-field';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() formControlEl!: AbstractControl;
  @Input() data!: FormField;

  @Input() force: boolean = false;
  @Input() forceText?: string;

  constructor() {}

  ngOnInit(): void {}
}
