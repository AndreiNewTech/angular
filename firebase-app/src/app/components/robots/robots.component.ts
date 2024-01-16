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

  constructor(
    public firestore: Firestore,
    public robotsService: RobotsService
  ) {
    // Read
  }

  ngOnInit() {
    this.robotsService.getRobotsCollection().subscribe((robots) => {
      this.robots = [...robots];
    });

    this.robotsService.getRobotsChanges().subscribe((el) => {
      console.log(el);
    });
  }

  addRobot(nume: string, culoare: string, varsta: string) {
    this.robotsService.addRobot({
      nume,
      culoare,
      varsta: parseInt(varsta),
    });
  }

  handleDelete(robotId: string) {
    this.robotsService.deleteRobot(robotId);
  }

  handleModify(robotId: string) {
    this.robotsService.updateRobot(robotId);
  }
}
