import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AddJobComponent } from '../../components/add-job/add-job.component';
import { DynamicComponentModule } from '../../components/dynamic-component/dynamic-component.module';
import { FormModule } from '../../components/form/form.module';
import { JobListComponent } from '../../components/job-list/job-list.component';
import { JobComponent } from '../../components/job/job.component';
import { NoJobsComponent } from '../../components/no-jobs/no-jobs.component';
import { SharedModule } from '../../shared/shared.module';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { JobStatusComponent } from '../../components/job-status/job-status.component';
import { JobProgressComponent } from '../../components/job-progress/job-progress.component';

@NgModule({
  declarations: [
    JobsComponent,
    NoJobsComponent,
    JobComponent,
    JobListComponent,
    AddJobComponent,
    JobStatusComponent,
    JobProgressComponent,
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    A11yModule,
    SharedModule,
    TranslateModule,
    FormModule,
    DynamicComponentModule,
    SharedModule,
  ],
})
export class JobsModule {}
