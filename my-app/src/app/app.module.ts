import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersSelectComponent } from './components/users-details/users-select/users-select.component';
import { UserDetailsComponent } from './components/users-details/user-details/user-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ReactiveFormsComponent } from './components/playground/reactive-forms/reactive-forms.component';
import { AddUserReactiveComponent } from './components/add-user-reactive/add-user-reactive.component';
import { ReactiveFormComponent } from './components/playground/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    UsersDetailsComponent,
    UsersSelectComponent,
    UserDetailsComponent,
    NavbarComponent,
    AddUserComponent,
    ReactiveFormsComponent,
    AddUserReactiveComponent,
    ReactiveFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
