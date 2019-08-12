import { fromEvent, Observable, Observer, of, from, timer, interval, range, empty, throwError } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';
import { createButton } from '../utils/dom-elements-provider';

export const basicCaseButton = createButton('Basic');

// const thread = Observable.create((observer: Observer<string>) => {
//   observer.next('Ready');
//   observer.next('Steady');
//   observer.next('Go!!!');
//   observer.complete();
// });

// const thread = of([1,2,3], 'yay!', undefined, null, 0);

// const thread = from(Promise.resolve(100));

// const thread = timer(1000, 500); // starts after 1000 msec and raises new values each 500 msec

// const thread = interval(500); // raises new values each 500 msec

// const thread = range(0, 100); // raises values from 0 to 99 and then complete

// const thread = empty(); // immediately completes with no values

// const thread = throwError('An error has occurred.');

const thread = fromEvent(basicCaseButton, 'click')
  .pipe(
    throttleTime(1000),
    map((event: MouseEvent) => `x: ${event.clientX}; y: ${event.clientY};`)
  );

thread.subscribe({
  next: (value: any) => console.log(`Next: ${value}`),
  error: (error: Error) => console.log(`Error: ${error}`),
  complete: () => console.log(`Completed!`)
});
