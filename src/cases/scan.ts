import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';
import { createButton } from '../utils/dom-elements-provider';

export const scanCaseButton = createButton('Scan');

fromEvent(scanCaseButton, 'click')
  .pipe(scan((count) => count + 1, 0))
  .subscribe((count) => console.log(`Clicked ${count} times`));
