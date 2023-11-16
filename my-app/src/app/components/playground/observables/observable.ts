import { merge, pipe, concat, forkJoin, combineLatest, Observable } from 'rxjs';
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
import { Subject, BehaviorSubject } from 'rxjs';

export function observableBehaviour() {
  // operatorsAndObsCreators();
  // checkBehaviours();
  createObservable();
}

function createObservable() {
  const iteratorObservator = new Observable((observer) => {
    console.log(observer);
    observer.error('Error Occured');
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
    observer.complete();
  });
  iteratorObservator.subscribe({
    next: (val) => {
      console.log(val, 'Next');
    },
    error: (err) => {
      console.log(err, 'Error');
    },
    complete: () => {
      console.log('Complete');
    },
  });

  fromEventObsr();
}

function checkBehaviours() {
  const subject = new Subject();
  const behaviorSubject = new BehaviorSubject('Initial Value');

  subject.subscribe((val) => {
    console.log(val, 'First');
  });

  subject.next('a');
  subject.next('b');
  subject.next('c');

  subject.pipe(map((el: any) => el.toUpperCase())).subscribe((val) => {
    console.log(val, 'Second');
  });

  subject.next('d');

  subject.subscribe((val) => {
    console.log(val, 'Third Subject');
  });

  behaviorSubject.subscribe((val) => {
    console.log(val, 'subscriber 1');
  });

  behaviorSubject.next('Next Value');

  behaviorSubject.subscribe((val) => {
    console.log(val, 'subscriber 2');
  });
}

function operatorsAndObsCreators() {
  const oddList = of(1, 3, 5, 7);
  const oddListArr = from([1, 3, 5, 7]).pipe(filter((el) => el > 3));
  const objOddList = from(Object.entries({ a: 1, b: 2 }));

  const rangeVal = range(0, 30);
  console.log(Object.entries({ a: 1, b: 2 }));

  objOddList.subscribe((val) => {
    console.log(val);
  });

  rangeVal.subscribe((val) => {
    console.log(val);
  });

  oddListArr.subscribe((val) => {
    console.log(val, 'Third');
  });
}

function fromEventObsr() {
  // create custom event

  const event = new Event('customEvent');
  const customEvent = new CustomEvent('customEvent', {
    detail: { name: 'Custom Event' },
  });

  // call event after 10 sec

  setTimeout(() => {
    document.dispatchEvent(event);
  }, 1000);

  setTimeout(() => {
    document.dispatchEvent(customEvent);
  }, 2000);

  // const button = document.getElementsByTagName('button');
  // console.log(button);
  const observer = fromEvent(document, 'customEvent');
  observer.subscribe((val) => {
    console.log(val, 'Subscriber 1');
  });

  observer.subscribe((val) => {
    console.log(val, 'Subscriber 2');
  });
}

function concatValues() {
  const timer = interval(1000).pipe(
    map((val) => {
      return val * 1000;
    }),
    take(5)
  );
  const sequence = range(1, 10);
  const result = concat(timer, sequence);
  timer.subscribe((x) => console.log(x));

  // const numbers = interval(20);
  // numbers.subscribe((val) => {
  //   console.log(val);
  // });
}

concatValues();
//

// export default observable;
