

import { Observable, Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

// Observable
// Next can only be called within the inner
// implimentaion of the obervable
const observable = new Observable(observer => {
  setTimeout(() => observer.next('hello from Observable!'), 1000);
});

observable.subscribe(v => console.log(v));


// Subject
const subject = new Subject();
subject.next('missed message from Subject');
subject.subscribe(v => console.log(v));
subject.next('hello from subject!');


// ReplaySubject
const replaySubject = new ReplaySubject();
replaySubject.next('hello from ReplaySubject!');
replaySubject.next('hello from second event from  ReplaySubject!');
replaySubject.subscribe(v => console.log(v));


// BehaviorSubject
const behaviorSubject = new BehaviorSubject('hello initial value from BehaviorSubject');
behaviorSubject.subscribe(v => console.log(v));
behaviorSubject.next('hello again from BehaviorSubject'); 