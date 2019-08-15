import { createButton } from '../utils/dom-elements-provider';
import { fromEvent, of, range, interval } from 'rxjs';
import { pluck, reduce, scan, map, mapTo, flatMap, switchMap, exhaustMap } from 'rxjs/operators';

export const transformCaseButton = createButton('Transform');
// fromEvent(transformCaseButton, 'click').subscribe(() => {
//   // const stream = of({
//   //   name: 'Bob',
//   //   age: 33
//   // }).pipe(pluck('name'));

//   // const stream = of(1, 2, 3, 4, 5).pipe(reduce((acc, current) => acc + current)); // 15
//   // OR
//   const stream = of(1, 2, 3, 4, 5).pipe(scan((acc, current) => acc + current)); // 1 3 6 10 15

//   stream.subscribe({
//     next: (value: any) => console.log(`Next: ${value}`),
//     error: (error: Error) => console.log(`Error: ${error}`),
//     complete: () => console.log(`Completed!`)
//   });
// });


const clicks = fromEvent(transformCaseButton, 'click');

// flatMap === mergeMap
// starts new observable every click and does not stop previous observable
// const stream = clicks.pipe(flatMap(_ => interval(1000)));

// starts new observable every click and stops previous observable
// const stream = clicks.pipe(switchMap(_ => interval(1000)));

// when new observable
const stream = clicks.pipe(exhaustMap(_ => interval(1000)));

stream.subscribe({
  next: (value: any) => console.log(`Next: ${value}`),
  error: (error: Error) => console.log(`Error: ${error}`),
  complete: () => console.log(`Completed!`)
});
