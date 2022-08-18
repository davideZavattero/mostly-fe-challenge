import { Component, OnInit } from '@angular/core';
import { JobName } from '../../interfaces/job';
import { addJobForm } from '../../static/add-job-form';
import { FormField } from '../form/interfaces/form-field';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss'],
})
export class AddJobComponent implements OnInit {
  formData: FormField[] = addJobForm;
  disabled = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(data: JobName) {
    console.log('jooob', data);
  }
}
