import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './components/playground/playground.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';

type RoutesDetails = {
  home: string;
  usersDetails: string;
  addUser: string;
};

export const routesDetails: RoutesDetails = {
  home: '',
  usersDetails: 'users-details',
  addUser: 'add-user',
};

const routes: Routes = [
  { path: routesDetails.home, component: PlaygroundComponent },
  {
    path: routesDetails.usersDetails,
    component: UsersDetailsComponent,
  },
  {
    path: routesDetails.addUser,
    component: AddUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
