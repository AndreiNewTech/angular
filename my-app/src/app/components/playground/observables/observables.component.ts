import { Component } from '@angular/core';

import { Subject, BehaviorSubject } from 'rxjs';
import { merge, pipe, concat, forkJoin, combineLatest } from 'rxjs';
import { of, from, fromEvent, interval, range } from 'rxjs';
import {
  map,
  filter,
  reduce,
  scan,
  tap,
  take,
  takeLast,
  takeUntil,
} from 'rxjs/operators';

import { observableBehaviour } from './observable';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent {
  constructor() {
    observableBehaviour();
  }
}
