import './styles/index.css';
import { fromEvent, pipe } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

const button = document.querySelector('button');
fromEvent(button, 'click')
  .pipe(
    throttleTime(1000),
    map((event: MouseEvent) => `x: ${event.clientX}; y: ${event.clientY};`)
  )
  .subscribe(coordinates => {
    return console.log(coordinates);
  });
