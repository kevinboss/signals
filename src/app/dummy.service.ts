import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor() {
  }

  states(): Observable<string[]> {
    return new BehaviorSubject(['Ready', 'Set', 'Go']);
  }
}
