import { BehaviorSubject, Subject } from 'rxjs';

const userListSubj$ = new Subject();

userListSubj$.subscribe((val) => console.log('First Subscriber', val));

userListSubj$.subscribe((val) => console.log('Second Subscriber', val));

userListSubj$.subscribe((val) => console.log('Third Subscriber', val));

userListSubj$.next({
  name: 'First user',
  age: 10,
});

userListSubj$.next({
  name: 'Second user',
  age: 20,
});

setTimeout(() => {
  userListSubj$.next({
    name: 'Second user',
    age: 20,
  });
}, 3000);

userListSubj$.subscribe((val) => console.log('Fourth Subscriber', val));

const userListSubj2$ = new BehaviorSubject([
  {
    name: 'First Behaviour Subject',
  },
]);

userListSubj2$.next([
  ...userListSubj2$.value,
  {
    name: 'Second Behaviour Subject',
  },
]);

userListSubj2$.subscribe((val) => {
  console.log(val);
});

userListSubj2$.subscribe((val) => {
  console.log(val);
});

userListSubj2$.subscribe((val) => {
  console.log(val);
});

export default {};
