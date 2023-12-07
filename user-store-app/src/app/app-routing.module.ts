import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDashboardComponent } from './components/containers/users-dashboard/users-dashboard.component';
import { UserDashboardComponent } from './components/containers/user-dashboard/user-dashboard.component';
import { UserProductsComponent } from './components/containers/user-dashboard/user-products/user-products.component';
import { UserCommentsComponent } from './components/containers/user-dashboard/user-comments/user-comments.component';

const routes: Routes = [
  { path: '', component: UsersDashboardComponent },
  {
    path: 'user/:id',
    component: UserDashboardComponent,
    children: [
      {
        path: 'products',
        component: UserProductsComponent,
      },
      {
        path: 'comments',
        component: UserCommentsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
