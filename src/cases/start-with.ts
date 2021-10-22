import { fromEvent } from 'rxjs';
import { filter, map, scan, startWith, take, tap } from 'rxjs/operators';
import { createButton } from '../utils/dom-elements-provider';
import { getObserver } from '../utils/observer-provider';

const dictionary: { [key: number]: string } = {
  // 0: 'value0',
  1: 'value1',
  2: 'value2',
  3: 'value3',
};
let key = 0;

export const startWithCaseButton = createButton('Start with');
const clickStream = fromEvent(startWithCaseButton, 'click').pipe(
  map((event: MouseEvent) => ({
    dictionary,
    key,
  })),
  tap(() => {
    key += 1;
  }),
);

const resultStream = clickStream.pipe(
  filter(({ dictionary, key }) => Boolean(dictionary[key])),
  map(({ dictionary, key }) => dictionary[key]),
  startWith(key),
  take(2),
);

resultStream.subscribe(getObserver('Start with'));
