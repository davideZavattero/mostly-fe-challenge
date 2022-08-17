import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonsType } from '../../enums/buttons-type';
import { FormField } from './interfaces/form-field';
import { FormService } from './services/form/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() formFields!: FormField[];
  @Input() submitText: string = 'form.submit';

  private _forceDisabled!: boolean;
  get forceDisabled(): boolean {
    return this._forceDisabled;
  }
  @Input() set forceDisabled(val: boolean) {
    this._forceDisabled = val || false;
    if (this.formGroup) {
      if (val) {
        this.formGroup.disable();
      } else {
        this.formGroup.enable();
      }
    }
  }

  @Output() formSubmitted = new EventEmitter();

  public formGroup!: FormGroup;
  public submitBtn = ButtonsType.SUBMIT;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.formGroup = this.formService.generateFormGroup(this.formFields);
  }

  onSubmit(evt: any) {
    if (this.formGroup.valid) {
      this.formSubmitted.emit(this.formGroup.value);
    }
  }
}
