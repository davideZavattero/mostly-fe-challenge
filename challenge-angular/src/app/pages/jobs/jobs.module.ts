import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { SharedModule } from '../../shared/shared.module';
import { DynamicComponentModule } from '../../components/dynamic-component/dynamic-component.module';
import { JobListComponent } from '../../components/job-list/job-list.component';
import { JobComponent } from '../../components/job/job.component';
import { NoJobsComponent } from '../../components/no-jobs/no-jobs.component';

@NgModule({
  declarations: [
    JobsComponent,
    NoJobsComponent,
    JobComponent,
    JobListComponent,
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    DynamicComponentModule,
    SharedModule,
    TranslateModule,
  ],
})
export class JobsModule {}
