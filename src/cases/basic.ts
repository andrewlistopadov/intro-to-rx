import {
  fromEvent,
  Observable,
  Observer,
  of,
  from,
  timer,
  interval,
  range,
  empty,
  throwError
} from 'rxjs';
import { throttleTime, map, switchMap } from 'rxjs/operators';
import { createButton } from '../utils/dom-elements-provider';

export const basicCaseButton = createButton('Basic');

const stream = Observable.create((observer: Observer<string>) => {
  observer.next('Ready');
  observer.next('Steady');
  observer.next('Go!!!');
  observer.complete();
  observer.next('And... nothing has happenned'); // won't be emitted after observable is completed
});

// const stream = Observable.create((observer: Observer<string>) => {
//   observer.next('Ready');
//   observer.next('Steady');
//   observer.error('Oops!...');
//   observer.complete(); // won't be called cause on error observable marked as done, no new values will be emitted
// });

// const stream = of([1,2,3], 'yay!', undefined, null, 0);

// const stream = from(Promise.resolve(100));

// const stream = timer(1000, 500); // starts after 1000 msec and emits new values each 500 msec

// const stream = interval(500); // emits new values each 500 msec

// const stream = range(0, 100); // emits values from 0 to 99 and then complete

// const stream = empty(); // immediately completes with no values

// const stream = throwError('An error has occurred.');

// ------------------------------------------------------------------------------
const clickStream = fromEvent(basicCaseButton, 'click');

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
