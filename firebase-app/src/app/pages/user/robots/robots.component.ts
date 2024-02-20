import { Component } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { RobotsService } from '../../../services/robots/robots.service';
import { UserService } from 'src/app/services/auth/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.scss'],
})
export class RobotsComponent {
  robots = [] as any;
  subscription: Observable<any> | any;

  name: string = '';
  color: string = '';
  age: string = '';

  constructor(
    public firestore: Firestore,
    public robotsService: RobotsService,
    public userService: UserService,
    public router: Router
  ) {
    // Read
  }
  ngOnInit() {
    this.subscription = this.robotsService
      .getRobotsChanges('USER', [])
      .subscribe((robots) => {
        this.robots = [...robots];
      });
  }

  handleDelete(robotId: string) {
    this.robotsService.deleteRobot(robotId);
  }

  handleEdit(robotId: string) {
    this.router.navigate([`user/edit-robot/${robotId}`]);
  }

  handleFilterRobotsListSubmit() {
    this.subscription.unsubscribe();

    // Name Filter

    const whereArr = [];
    if (this.name) {
      const endString = this.name.replace(/.$/, (c) =>
        String.fromCharCode(c.charCodeAt(0) + 1)
      );

      const startNameWhere = where('name', '>=', this.name);
      const endNameWhere = where('name', '<', endString);

      whereArr.push(startNameWhere);
      whereArr.push(endNameWhere);
    }

    if (this.color) {
      const colorWhere = where('color', '==', this.color);
      whereArr.push(colorWhere);
    }

    if (this.age) {
      const ageWhere = where('age', '>=', parseInt(this.age));
      whereArr.push(ageWhere);
    }

    console.log(whereArr);
    this.subscription = this.robotsService
      .getRobotsChanges('USER', whereArr)
      .subscribe((robots) => {
        this.robots = [...robots];
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
