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
  autonomy: number = 0; //h
  speed: number = 0; //km/h

  constructor(
    public firestore: Firestore,
    public robotsService: RobotsService,
    public userService: UserService
  ) {}

  addRobot() {
    const robot = {
      name: this.name,
      color: this.color,
      age: this.age,
      autonomy: this.autonomy,
      speed: this.speed,
    };

    this.userService.getUser().then((user: any) => {
      this.robotsService.addRobot({
        ...robot,
        userId: user?.uid,
      });
    });
  }
}
