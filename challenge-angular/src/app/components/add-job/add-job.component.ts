import { Component, OnInit } from '@angular/core';
import { JobName } from '../../interfaces/job';
import { JobsService } from '../../services/jobs/jobs.service';
import { ModalService } from '../../services/modal/modal.service';
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

  constructor(
    private jobService: JobsService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  onSubmit(data: JobName) {
    this.disabled = true;
    this.jobService.sendNewJob(data).subscribe({
      next: (res) => {
        this.modalService.close();
        this.disabled = false;
      },
    });
  }
}
