import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { User } from './../types';

@Component({
  selector: 'app-users-select',
  templateUrl: './users-select.component.html',
  styleUrls: ['./users-select.component.scss'],
})
export class UsersSelectComponent {
  @Input() users: User[] = [];
  @Output() selectUserEvent = new EventEmitter();
  selectedUser: User | undefined;

  handleUserClick(e: Event, userId: number) {
    this.selectedUser = this.users.find((user) => user.id === userId);
    this.selectUserEvent.emit(this.selectedUser);
  }
}
