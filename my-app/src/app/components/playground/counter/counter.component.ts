import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count = 0;

  constructor(public counterService: CounterService) {}

  ngOnInit() {
    // console.log(this.counterService.countVal);
    this.counterService.countVal.subscribe((el) => {
      this.count = el;
    });
  }
}
