import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { User } from '../types';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  @Input() selectedUser: User | undefined;
}
