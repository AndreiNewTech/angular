import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Auth } from '@angular/fire/auth';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {}
