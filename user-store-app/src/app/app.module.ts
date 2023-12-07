import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersDashboardComponent } from './components/containers/users-dashboard/users-dashboard.component';
import { UserDashboardComponent } from './components/containers/user-dashboard/user-dashboard.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/common/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    UsersDashboardComponent,
    UserDashboardComponent,
    NavigationComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
