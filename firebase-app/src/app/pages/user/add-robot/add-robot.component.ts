import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { RobotsService } from 'src/app/services/robots/robots.service';

@Component({
  selector: 'app-add-robot',
  templateUrl: './add-robot.component.html',
  styleUrls: ['./add-robot.component.scss'],
})
export class AddRobotComponent {
  name: string = '';
  color: string = '';
  age: string = '';
  autonomy: number = 0; //h
  speed: number = 0; //km/h

  constructor(
    public firestore: Firestore,
    public robotsService: RobotsService,
    public auth: Auth
  ) {
    // Read
  }

  addRobot() {
    const robot = {
      name: this.name,
      color: this.color,
      age: this.age,
      autonomy: this.autonomy,
      speed: this.speed,
    };

    if (this.auth.currentUser) {
      this.robotsService.addRobot({
        ...robot,
        userId: this.auth.currentUser?.uid,
      });
    }
  }
}
