import { createButton } from '../utils/dom-elements-provider';
import { fromEvent, of, range, interval } from 'rxjs';
import {
  pluck,
  reduce,
  scan,
  map,
  mapTo,
  flatMap,
  switchMap,
  exhaustMap,
  throttleTime
} from 'rxjs/operators';

export const transformCaseButton = createButton('Transform');

const clickStream = fromEvent(transformCaseButton, 'click');

// const stream = of({
//   name: 'Bob',
//   age: 33
// }).pipe(pluck('name'));

// const stream = of(1, 2, 3, 4, 5).pipe(reduce((acc, current) => acc + current)); // 15
// OR
// const stream = of(1, 2, 3, 4, 5).pipe(scan((acc, current) => acc + current)); // 1 3 6 10 15

// const resultStream = clickStream.pipe(
//   throttleTime(500),
//   flatMap(_ => stream)
// );

// ------------------------------------------------------------------

// flatMap === mergeMap
// starts new observable every click and does not stop previous observable
// const stream = interval(1000);
// const resultStream = clickStream.pipe(
//   throttleTime(500),
//   flatMap(_ => stream)
// );

// starts new observable every click and stops previous observable
// const stream = clickStream.pipe(switchMap(_ => interval(1000)));
// const stream = interval(1000);
// const resultStream = clickStream.pipe(
//   throttleTime(500),
//   switchMap(_ => stream)
// );

// when new observable
const stream = interval(1000);
const resultStream = clickStream.pipe(
  throttleTime(500),
  exhaustMap(_ => stream)
);

const observer = {
  next: (value: any) => console.log(`Next: ${value}`),
  error: (error: Error) => console.log(`Error: ${error}`),
  complete: () => console.log(`Completed!`)
};

resultStream.subscribe(observer);
