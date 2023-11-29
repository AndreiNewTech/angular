import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDashboardComponent } from './components/containers/users-dashboard/users-dashboard.component';
import { UserDashboardComponent } from './components/containers/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: UsersDashboardComponent },
  { path: 'user/:id', component: UserDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
