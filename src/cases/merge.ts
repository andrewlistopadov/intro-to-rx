import { fromEvent, timer, combineLatest, zip, forkJoin, concat, merge } from 'rxjs';
import { createButton } from '../utils/dom-elements-provider';
import {
  take,
  startWith,
  withLatestFrom,
  pairwise,
  mapTo,
  throttleTime,
  switchMap,
  raceWith,
} from 'rxjs/operators';
import { getObserver } from '../utils/observer-provider';

export const mergeCaseButton = createButton('Merge');

function getGroupA() {
  const timerOne = timer(1000, 4000).pipe(take(3));
  const timerTwo = timer(2000, 4000).pipe(take(3));
  const timerThree = timer(3000, 4000).pipe(take(3));

  // emits new combined value when any of the observables emits a value and append others with existing values.
  // return combineLatest(timerOne, timerTwo, timerThree);

  // emits new combined value when all of the observables emits a value and at least one is pending, then no combined value will be emitted.
  // return zip(timerOne, timerTwo, timerThree);

  // emits new combined value when all of the observables are completed. It emits latest emitted values.
  return forkJoin([timerOne, timerTwo, timerThree]);
}

function getGroupB() {
  const timerOne = timer(0, 1000).pipe(take(3), mapTo('first'));
  const timerTwo = timer(0, 100).pipe(take(3), mapTo('second'));
  const timerThree = timer(0, 75).pipe(take(3), mapTo('third'));

  // emits values according observable order despite that second observable emits events much faster
  // return concat(timerOne, timerTwo);

  // emits values upon receipt
  // return merge(timerOne, timerTwo);

  // emits starting value at the beginning of the events chain
  // return timerOne.pipe(startWith('some starting value'));

  // here 'latest' means latest in time
  // return timerOne.pipe(withLatestFrom(timerTwo));

  // combines previous and current values
  // return timerOne.pipe(pairwise());

  // first starting observable wins
  return timerOne.pipe(raceWith(timerTwo, timerThree));
}

// const stream = getGroupA();

const stream = getGroupB();

const clickStream = fromEvent(mergeCaseButton, 'click');

const resultStream = clickStream.pipe(
  throttleTime(500),
  switchMap((_) => stream),
);

resultStream.subscribe(getObserver('Merge'));
