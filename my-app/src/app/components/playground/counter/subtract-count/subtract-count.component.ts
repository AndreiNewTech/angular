import { Component } from '@angular/core';
import { CounterService } from '../counter.service';
import { LoggerService } from '../../logger-service/logger.service';

@Component({
  selector: 'app-subtract-count',
  templateUrl: './subtract-count.component.html',
  styleUrls: ['./subtract-count.component.scss'],
})
export class SubtractCountComponent {
  constructor(
    public counterService: CounterService,
    public loggerService: LoggerService
  ) {}
  handleSubtract() {
    this.counterService.decrementCount();
    this.loggerService.logWarning('Subtract');
  }
}
