import { fromEvent, range, timer, from } from 'rxjs';
import { createButton } from '../utils/dom-elements-provider';
import {
  first,
  filter,
  last,
  single,
  debounce,
  debounceTime,
  distinctUntilChanged,
  throttleTime,
  auditTime,
  skip,
  take,
  skipLast,
  takeLast,
  skipUntil,
  takeUntil,
  skipWhile,
  takeWhile,
  switchMap
} from 'rxjs/operators';

export const filterCaseButton = createButton('Filter');

const stream = range(0, 100).pipe(filter((num: number) => num > 50));

// const stream = range(0, 100).pipe(first((num: number) => num > 50));

// const stream = range(0, 100).pipe(single((num: number) => num > 50)); // throws error as only one appropriate value expected

// ----------------------------------------------------------------------------------

// const stream = range(0, 100).pipe(debounce((num: number) => timer(1000 * num)));
// OR
// const stream = range(0, 100).pipe(debounceTime(1000));

// const stream = from([1, 1, 1, 2, 2, 3, 1, 1, 2, 2, 3, 3, 5]).pipe(
//   distinctUntilChanged()
// );

// const stream = timer(0, 200).pipe(throttleTime(1000));

// const stream = timer(0, 200).pipe(auditTime(1000));

// ----------------------------------------------------------------------------------

// const stream = range(0, 100).pipe(skip(10));
// const stream = range(0, 100).pipe(take(10));

// const stream = range(0, 100).pipe(skipLast(10));
// const stream = range(0, 100).pipe(takeLast(10));

// const stream = range(0, 100).pipe(skipUntil(timer(1000)));
// const stream = range(0, 100).pipe(takeUntil(timer(1000)));

// const stream = range(0, 100).pipe(skipWhile((num: number) => num < 9));
// const stream = range(0, 100).pipe(takeWhile((num: number) => num < 9));

const clickStream = fromEvent(filterCaseButton, 'click');

const resultStream = clickStream.pipe(
  throttleTime(500),
  switchMap(_ => stream)
);

const observer = {
  next: (value: any) => console.log(`Next: ${value}`),
  error: (error: Error) => console.log(`Error: ${error}`),
  complete: () => console.log(`Completed!`)
};

resultStream.subscribe(observer);
