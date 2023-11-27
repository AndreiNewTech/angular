import { Component } from '@angular/core';
import generalObservable from '../1_general';
import creationalObservable from '../2_creational';
import transformObservable from '../3_transform';
import joinedObservable from '../4_joined';
import subjectsObservable from '../5_subjects';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent {
  constructor() {
    // const obs_1 = generalObservable;
    // const obs_2 = creationalObservable;
    // const obs_3 = transformObservable;
    // const obs_4 = joinedObservable;
    const obs_5 = subjectsObservable;
  }
}
