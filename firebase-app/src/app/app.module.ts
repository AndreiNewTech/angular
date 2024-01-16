import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../enviroments/local';
import { RobotsComponent } from './components/robots/robots.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [AppComponent, RobotsComponent, UserComponent],
  imports: [
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
