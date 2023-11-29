import { Component } from '@angular/core';
import type { User } from '../../../services/users.service';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent {
  user: User | undefined;

  constructor(
    public usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((val) => {
      this.usersService.getUser(parseInt(val['id'])).subscribe((val) => {
        this.user = val;
      });
    });
  }
}
