import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RobotsComponent } from './components/robots/robots.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { AuthGuardService } from './components/user/auth-guard.service';

const routes: Routes = [
  { path: '', component: RobotsComponent, canActivate: [AuthGuardService] },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
