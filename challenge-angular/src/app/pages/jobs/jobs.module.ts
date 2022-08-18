import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { A11yModule } from '@angular/cdk/a11y';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { SharedModule } from '../../shared/shared.module';
import { DynamicComponentModule } from '../../components/dynamic-component/dynamic-component.module';
import { JobListComponent } from '../../components/job-list/job-list.component';
import { JobComponent } from '../../components/job/job.component';
import { NoJobsComponent } from '../../components/no-jobs/no-jobs.component';
import { AddJobComponent } from '../../components/add-job/add-job.component';

@NgModule({
  declarations: [
    JobsComponent,
    NoJobsComponent,
    JobComponent,
    JobListComponent,
    AddJobComponent,
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    A11yModule,
    DynamicComponentModule,
    SharedModule,
    TranslateModule,
  ],
})
export class JobsModule {}
