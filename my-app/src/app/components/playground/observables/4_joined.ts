import { concat, distinct, map, merge, of, zip } from 'rxjs';

// Concat values
const num$ = of(1, 2, 3, 4, 5);
const num2$ = of(5, 6, 7, 8, 9, 10);
const num3$ = of(5, 6, 7, 8, 9, 10, 11, 12);

concat(num$, num2$, num3$)
  .pipe(distinct())
  .subscribe((val) => console.log(val));

// Zip

const age$ = of(27, 25, 29);
const name$ = of('Foo', 'Bar', 'Beer');
const isDev$ = of(true, true, false);

zip(age$, name$, isDev$)
  .pipe(
    map(([age, name, isDev]) => ({
      age,
      name,
      isDev,
    }))
  )
  .subscribe((val) => {
    console.log(val);
  });

export default {};
