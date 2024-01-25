import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../enviroments/local';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RobotsComponent } from './pages/user/robots/robots.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AddRobotComponent } from './pages/user/add-robot/add-robot.component';
import { EditRobotComponent } from './pages/user/edit-robot/edit-robot.component';

@NgModule({
  declarations: [
    AppComponent,
    RobotsComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    AddRobotComponent,
    EditRobotComponent,
  ],
  imports: [
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
