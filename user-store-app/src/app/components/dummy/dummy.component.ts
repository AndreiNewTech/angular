import { Component } from '@angular/core';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
})
export class DummyComponent {
  constructor(public dialog: MatDialog) {}
  handleClose() {
    console.log(this.dialog.getDialogById('0'));
  }
}
