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
import { Auth } from '@angular/fire/auth';
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
    this.subscription = this.robotsService
      .getRobotsChanges()
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
