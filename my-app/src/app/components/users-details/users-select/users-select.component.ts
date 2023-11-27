import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { User } from './../types';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users-select',
  templateUrl: './users-select.component.html',
  styleUrls: ['./users-select.component.scss'],
})
export class UsersSelectComponent {
  @Input() users: User[] = [];
  @Output() selectUserEvent = new EventEmitter();
  selectedUser: User | undefined;

  constructor(public usersService: UsersService) {}

  ngOnInit() {
    this.usersService.users.subscribe((val) => {
      this.users = val;
      this.selectedUser = val[0];
    });
  }

  handleUserClick(e: Event, userId: number) {
    this.selectedUser = this.users.find((user) => user.id === userId);
    this.selectUserEvent.emit(this.selectedUser);
  }
}
