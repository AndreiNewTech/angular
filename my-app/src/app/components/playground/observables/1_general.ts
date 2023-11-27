import { Observable } from 'rxjs';

// Function
function getNumberToString(a: number) {
  return a + '';
}
const number2AsString = getNumberToString(2);

// Generator function
function* getNumbers() {
  yield 1;
  yield 2;
}

const getFuncIterator = getNumbers();
console.log(getFuncIterator.next().value);
console.log(getFuncIterator.next().value);

// for (let num of getFuncIterator) {
//   console.log(num);
// }

function* getCustomNumbersToString(n: number) {
  for (let index = 0; index < n; index++) {
    yield index + '';
  }
}

const genFuncIterator2 = getCustomNumbersToString(10);

// for (let num of genFuncIterator2) {
//   console.log(num);
// }

// Promisiune (Promise)

const createFullnamePromiseAfterSomeTime = function (
  name: string,
  surname: string,
  seconds: number
) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name + ' ' + surname);
    }, seconds * 1000);
  });
};

// createFullnamePromiseAfterSomeTime('Andrei', 'Duhanes', 5).then((val) => {
//   console.log(val);
// });

// Observable
const numbersRange$ = new Observable((observer) => {
  let setCount = 1;
  for (let i = 0; i < 20; i = i + 5) {
    setTimeout(() => {
      if (i === 15) {
        observer.complete();
      } else {
        observer.next(i);
      }
    }, 1000 * setCount);
    setCount++;
  }
});

numbersRange$.subscribe({
  next: (val) => {
    console.log(val);
  },
  error: (val) => {
    console.log(val);
  },

  complete: () => {
    console.log('Complete');
  },
});

export default {};
