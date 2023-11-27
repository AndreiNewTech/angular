import { of, from, range, fromEvent, generate } from 'rxjs';

// of - create observable from an enumeration
const names$ = of('Andrei', 'Alex', 'John', 'Sebi');

names$.subscribe((name) => {
  console.log(name);
});

const namesObj$ = of({ name: 'Bill' }, { name: 'Sara' }, { name: 'James' });

namesObj$.subscribe((name) => {
  console.log(name);
});

// From - create observable from enumerable (array, string);
const moviesArray$ = from(['Interstellar', 'Matrix', 'Wizard of Oz']);
const dogString$ = from('Husky');

moviesArray$.subscribe((mov) => {
  console.log(mov);
});

dogString$.subscribe((mov) => {
  console.log(mov);
});

// Range
const range$ = range(1, 100);
range$.subscribe((n) => {
  console.log(n);
});

// From custom event or normal event (click, hover)
const customEvent = new Event('customEvent');

const evObs$ = fromEvent(document, 'customEvent');

evObs$.subscribe((ev) => {
  console.log('Event fired');
});

document.dispatchEvent(customEvent);

// Generate
const result = generate(
  1,
  (x) => x < 10,
  (x) => x + 3,
  (x) => x
);

result.subscribe((val) => {
  console.log(val);
});

export default {};
