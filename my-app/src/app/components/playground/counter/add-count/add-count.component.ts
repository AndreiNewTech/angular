import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.scss'],
})
export class AddCountComponent {
  constructor(public counterService: CounterService) {}

  handleAdd() {
    this.counterService.incrementCount();
  }
}
