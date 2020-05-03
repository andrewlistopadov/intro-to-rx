import { BehaviorSubject, Subject, fromEvent, ReplaySubject } from 'rxjs';
import { createButton } from '../utils/dom-elements-provider';
import { throttleTime } from 'rxjs/operators';

export const subjectCaseButton = createButton('Subject');

const clickStream = fromEvent(subjectCaseButton, 'click').pipe(throttleTime(500));

clickStream.subscribe(() => {
  // runSubjectCase();
  // runBehaviorSubjectCase();
  runReplaySubjectCase();
});

function runSubjectCase() {
  const subject = new Subject();
  // subject starts emitting only after there is a subscription to it
  subject.next(0);
  subject.subscribe((x) => console.log(`observer #1: ${x}`));
  subject.next(1);
  subject.next(2);
  // subject.error('Subject error');

  // better than .complete because if there is a source that will subscribe after subject completion
  // than no error or sometning else
  // subject.unsubscribe();
  subject.subscribe((x) => console.log(`observer #2: ${x}`));
  subject.next(3);
}

function runBehaviorSubjectCase() {
  const subject = new BehaviorSubject(100);
  // subject starts emitting only after there is a subscription to it
  subject.next(0);
  subject.subscribe((x) => console.log(`observer #1: ${x}`));
  subject.next(1);
  subject.next(2);
  // subject.error('Subject error');

  // better than .complete because if there is a source that will subscribe after subject completion
  // than no error or sometning else
  // subject.unsubscribe();
  subject.subscribe((x) => console.log(`observer #2: ${x}`));
  subject.next(3);
}

function runReplaySubjectCase() {
  const subject = new ReplaySubject();
  // subject starts emitting only after there is a subscription to it
  subject.next(0);
  subject.subscribe((x) => console.log(`observer #1: ${x}`));
  subject.next(1);
  subject.next(2);
  // subject.error('Subject error');

  // better than .complete because if there is a source that will subscribe after subject completion
  // than no error or sometning else
  // subject.unsubscribe();
  subject.subscribe((x) => console.log(`observer #2: ${x}`));
  subject.next(3);
}
