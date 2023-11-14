import { Component } from '@angular/core';
import { routesDetails } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  handleChildEvent(event: any) {
    console.log(event);
  }

  constructor() {}
}
