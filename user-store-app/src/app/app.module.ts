import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersDashboardComponent } from './components/containers/users-dashboard/users-dashboard.component';
import { UserDashboardComponent } from './components/containers/user-dashboard/user-dashboard.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersDashboardComponent,
    UserDashboardComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
