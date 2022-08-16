import { Component, Input, OnInit } from '@angular/core';
import { FormField } from './interfaces/form-field';
import { FormService } from './services/form/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() formFields!: FormField[];

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    const forms = this.formService.generateFormGroup(this.formFields);
    console.log(this.formFields, forms);
  }
}
