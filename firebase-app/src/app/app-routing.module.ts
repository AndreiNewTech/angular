import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { RobotsComponent } from './pages/user/robots/robots.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { FeatureAuthGuardService } from './guards/feature-auth-guard.service';
import { AddRobotComponent } from './pages/user/add-robot/add-robot.component';
import { EditRobotComponent } from './pages/user/edit-robot/edit-robot.component';
import { AdminRobotsComponent } from './pages/admin/robots/admin-robots/admin-robots.component';

const routes: Routes = [
  { path: '', redirectTo: 'user/robots', pathMatch: 'full' },
  {
    path: 'user/robots',
    component: RobotsComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'user/add-robot', component: AddRobotComponent },
  { path: 'user/edit-robot/:id', component: EditRobotComponent },

  { path: 'admin', redirectTo: 'admin/robots', pathMatch: 'full' },
  {
    path: 'admin/robots',
    component: AdminRobotsComponent,
    canActivate: [AuthGuardService],
  },

  // { path: '/user/profile', component: RobotsComponent, canActivate: [AuthGuardService] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
