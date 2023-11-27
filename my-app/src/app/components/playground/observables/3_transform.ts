import {
  of,
  from,
  range,
  fromEvent,
  generate,
  map,
  tap,
  filter,
  distinct,
  find,
} from 'rxjs';

// Map, Filter, Find
const number$ = range(1, 10).pipe(
  map((val) => val * 2),
  map((val) => val * 10)
);

number$.subscribe((val) => {
  console.log(val);
});

const dogs$ = of(
  { name: 'Milo', age: 6 },
  { name: 'Ave', age: 12 },
  { name: 'Snowflake', age: 11 }
);

const dogsModified$ = dogs$.pipe(
  tap((dog) => {
    console.log(dog);
  }),
  map((dog) => {
    return {
      ...dog,
      name: dog.name.toUpperCase(),
      country: 'Romania',
    };
  }),
  tap((dog) => {
    console.log(dog);
  })
);

// dogsModified$.subscribe((dog) => {
//   // console.log(dog);
// });

const dogsFiltered$ = dogs$.pipe(
  filter((dog) => dog.age < 12),
  map((dog) => dog.name.toLowerCase())
);

dogsFiltered$.subscribe((dog) => {
  console.log(dog);
});

// Distinct

const distinctNums$ = of(1, 2, 3, 4, 3, 3, 3, 3, 4, 4, 4).pipe(distinct());
distinctNums$.subscribe((n) => {
  console.log(n);
});

of({ age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' })
  .pipe(distinct(({ name }) => name))
  .subscribe((x) => console.log(x));

// Find

dogsModified$
  .pipe(find((dog) => dog.name === 'AVE'))
  .subscribe((val) => console.log(val));

export default {};
