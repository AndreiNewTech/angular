import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/auth/user.service';
import { RobotsService } from 'src/app/services/robots/robots.service';

@Component({
  selector: 'app-admin-robots',
  templateUrl: './admin-robots.component.html',
  styleUrls: ['./admin-robots.component.scss'],
})
export class AdminRobotsComponent {
  robots = [] as any;
  subscription: Observable<any> | any;

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
      .getRobotsChanges('ADMIN')
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
