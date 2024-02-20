import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/services/auth/user.service';
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
  autonomy: string = ''; //h
  speed: string = ''; //km/h

  constructor(
    public firestore: Firestore,
    public robotsService: RobotsService,
    public userService: UserService
  ) {}

  addRobot() {
    const robot = {
      name: this.name,
      color: this.color,
      age: parseInt(this.age),
      autonomy: parseFloat(this.autonomy),
      speed: parseFloat(this.speed),
    };

    const userId = this.userService.getUserId();
    this.robotsService.addRobot({
      ...robot,
      userId: userId,
    });

    // Reset
    this.name = '';
    this.color = '';
    this.age = '';
    this.autonomy = '';
    this.speed = '';
  }
}
