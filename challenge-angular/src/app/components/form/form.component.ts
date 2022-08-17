import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from './interfaces/form-field';
import { FormService } from './services/form/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() formFields!: FormField[];
  public formGroup!: FormGroup;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.formGroup = this.formService.generateFormGroup(this.formFields);
    console.log(this.formFields, this.formGroup);
  }
}
