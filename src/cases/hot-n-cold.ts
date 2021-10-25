import { Observable, Observer } from 'rxjs';
import { share } from 'rxjs/operators';
import { createButton } from '../utils/dom-elements-provider';

export const hotNColdCaseButton = createButton('Hot-n-Cold');

const stream = new Observable((observer: Observer<string>) => {
  console.log('Observable is alive');

  const randomInt = () => Math.floor(Math.random() * 100);

  setTimeout(() => {
    observer.next(`Number for the 1st event: ${randomInt()}`);
  }, 1000);

  setTimeout(() => {
    observer.next(`Number for the 2nd event: ${randomInt()}`);
  }, 2000);

  setTimeout(() => {
    observer.next(`Number for the 3rd event: ${randomInt()}`);
  }, 3000);
});

const sharedStream = stream.pipe(share());

// OBSERVER A
setTimeout(() => {
  // stream.subscribe((data: string) => {
  // sharedStream.subscribe((data: string) => {
  //   console.log(`Observer A. ${data}`);
  // });
}, 0);

// OBSERVER B
setTimeout(() => {
  // stream.subscribe((data: string) => {
  // sharedStream.subscribe((data: string) => {
  //   console.log(`Observer B. ${data}`);
  // });
}, 3000);
