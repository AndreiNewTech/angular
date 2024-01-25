import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RobotsService } from 'src/app/services/robots/robots.service';

@Component({
  selector: 'app-edit-robot',
  templateUrl: './edit-robot.component.html',
  styleUrls: ['./edit-robot.component.scss'],
})
export class EditRobotComponent {
  name: string = '';
  color: string = '';
  age: string = '';
  autonomy: number = 0; //h
  speed: number = 0; //km/h

  robotId = '';

  constructor(public robotService: RobotsService, public router: Router) {}

  ngOnInit() {
    const urlParamId = this.router.url.split('/').at(-1);
    this.robotId = urlParamId || '';

    if (urlParamId) {
      this.robotService.getRobot(urlParamId).then((robot: any) => {
        if (robot) {
          this.name = robot.name;
          this.color = robot.color;
          this.age = robot.age;
          this.autonomy = robot.autonomy;
          this.speed = robot.speed;
        }
      });
    }

    // this.robotService.getRobot()
  }

  handleSumbit() {
    const robot = {
      name: this.name,
      color: this.color,
      age: this.age,
      autonomy: this.autonomy,
      speed: this.speed,
    };

    this.robotService
      .updateRobot(robot, this.robotId)
      .then(() => this.router.navigate(['/user/robots']));
  }
}
