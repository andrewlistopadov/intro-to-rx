import { fromEvent } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';
import {createButton} from '../utils/dom-elements-provider';

export const basicCaseButton = createButton('Basic');

fromEvent(basicCaseButton, 'click')
  .pipe(
    throttleTime(1000),
    map((event: MouseEvent) => `x: ${event.clientX}; y: ${event.clientY};`)
  )
  .subscribe(coordinates => {
    return console.log(coordinates);
  });
