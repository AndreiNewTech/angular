import { Component } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { RobotsService } from './robots.service';
import { Auth } from '@angular/fire/auth';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.scss'],
})
export class RobotsComponent {
  robots = [] as any;

  nume: string = '';
  culoare: string = '';
  varsta: string = '';

  userEmail: string = '';

  constructor(
    public firestore: Firestore,
    public robotsService: RobotsService,
    public auth: Auth,
    public userService: UserService,
    public router: Router
  ) {
    // Read
  }

  ngOnInit() {
    this.robotsService.getRobotsChanges().subscribe((robots) => {
      this.robots = [...robots];
    });

    this.auth.onAuthStateChanged(() => {
      if (this.auth.currentUser) {
        this.userEmail = this.auth.currentUser?.email || '';
      }
    });
  }

  addRobot(nume: string, culoare: string, varsta: string) {
    if (this.auth.currentUser) {
      this.robotsService.addRobot({
        nume,
        culoare,
        varsta: parseInt(varsta),
        userId: this.auth.currentUser?.uid,
      });
    }
  }

  handleDelete(robotId: string) {
    this.robotsService.deleteRobot(robotId);
  }

  handleModify(robotId: string) {
    this.robotsService.updateRobot(robotId);
  }
}
