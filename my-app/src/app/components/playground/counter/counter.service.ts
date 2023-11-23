import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = new BehaviorSubject<number>(0);
  localCount = 0;

  get countVal() {
    return this.count;
  }

  incrementCount() {
    this.count.next(this.count.value + 1);
  }

  decrementCount() {
    this.count.next(this.count.value - 1);
  }
}
