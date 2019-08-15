import { fromEvent, interval, throwError, of } from 'rxjs';
import { createButton } from '../utils/dom-elements-provider';
import { catchError, mergeMap, retry, retryWhen, delay, throttleTime, switchMap } from 'rxjs/operators';

export const errorCaseButton = createButton('Error');

const stream = interval(1000).pipe(
  mergeMap((val: number) => (val > 3 ? throwError('value > 3') : of(val))),
  // catchError(error => {
  //   console.log(`caught exception: ${error}`);
  //   return of('will be emitted');
  // }),
  // retry(2) // retry to run 2 times and then throughs exception
  retryWhen(errorObservable => errorObservable.pipe(delay(3000))) // waits for 3 sec. before rerunning
);

const clickStream = fromEvent(errorCaseButton, 'click');

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
