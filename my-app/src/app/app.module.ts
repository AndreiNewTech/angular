import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/playground/product-list.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { FormsModule } from '@angular/forms';
import { UsersSelectComponent } from './components/users-details/users-select/users-select.component';
import { UserDetailsComponent } from './components/users-details/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    UsersDetailsComponent,
    UsersSelectComponent,
    UserDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
