import { fromEvent, pipe } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import './styles/index.css';

const button = document.querySelector('button');
fromEvent(button, 'click')
  .pipe(throttleTime(1000))
  .subscribe(event => {
    return console.log(event);
  });
