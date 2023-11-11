import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { User } from '../types';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  @Input() selectedUser: User | undefined;

  constructor() {
    console.log('Constructor has been called', this.selectedUser, '');
  }
  ngOnInit() {
    // La initializare
    console.log('Comp has been started', this.selectedUser, '');
  }

  ngOnChanges(ev: Object) {
    // Cand se schimba input output values
    // console.log('Changed', ev);
  }

  ngDoCheck() {
    // Verificare manuala dupa ngOnChanges
  }

  ngOnDestroy() {
    // Cand se distruge componenta
  }

  ngAfterContentInit() {
    console.log('Content initialized');
  }

  ngAfterContentChecked() {
    console.log('Content checked');
  }

  ngAfterViewInit() {
    console.log('View initialized');
  }

  ngAfterViewChecked() {
    console.log('View checked');
  }
}

// function that sums 2 numbers
