import { createButton } from '../utils/dom-elements-provider';
import { fromEvent, of, range, interval } from 'rxjs';
import { pluck, reduce, scan, map, mapTo, flatMap, switchMap, exhaustMap } from 'rxjs/operators';

export const transformCaseButton = createButton('Transform');
// fromEvent(transformCaseButton, 'click').subscribe(() => {
//   // const thread = of({
//   //   name: 'Bob',
//   //   age: 33
//   // }).pipe(pluck('name'));

//   // const thread = of(1, 2, 3, 4, 5).pipe(reduce((acc, current) => acc + current)); // 15
//   // OR
//   const thread = of(1, 2, 3, 4, 5).pipe(scan((acc, current) => acc + current)); // 1 3 6 10 15

//   thread.subscribe({
//     next: (value: any) => console.log(`Next: ${value}`),
//     error: (error: Error) => console.log(`Error: ${error}`),
//     complete: () => console.log(`Completed!`)
//   });
// });


const clicks = fromEvent(transformCaseButton, 'click');

// flatMap === mergeMap
// starts new observable every click and does not stop previous observable
// const thread = clicks.pipe(flatMap(_ => interval(1000)));

// starts new observable every click and stops previous observable
// const thread = clicks.pipe(switchMap(_ => interval(1000)));

// when new observable
const thread = clicks.pipe(exhaustMap(_ => interval(1000)));

thread.subscribe({
  next: (value: any) => console.log(`Next: ${value}`),
  error: (error: Error) => console.log(`Error: ${error}`),
  complete: () => console.log(`Completed!`)
});
