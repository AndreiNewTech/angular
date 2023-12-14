import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import type { User } from '../../../services/users/users.service';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DummyComponent } from '../../dummy/dummy.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'dialog-animations-example-dialog',
  template: '<p>Hello</p>',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss'],
})
export class UsersDashboardComponent {
  users: User[] = [];

  constructor(public usersService: UsersService, public dialog: MatDialog) {}

  openDialog() {
    const refDialog = this.dialog.open(DialogAnimationsExampleDialog);
    console.log(refDialog);
  }

  ngOnInit() {
    this.usersService.users.subscribe((users) => {
      this.users = users;
    });
  }
}
