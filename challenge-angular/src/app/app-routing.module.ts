import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pages } from './enums/pages';
import { LoggedInGuard } from './guards/loggedIn/logged-in.guard';

const routes: Routes = [
  {
    path: Pages.LOGIN,
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: Pages.ROOT,
    loadChildren: () =>
      import('./pages/jobs/jobs.module').then((m) => m.JobsModule),
    canActivate: [LoggedInGuard],
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
