import {Component, Signal, signal, WritableSignal} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-data-emitter',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './data-emitter.component.html',
})
export class DataEmitterComponent {
  observable$: BehaviorSubject<string> = new BehaviorSubject<string>("Initial value");
  signal: WritableSignal<string> = signal("Initial value");

  update() {
    this.observable$.next("Observable value");
    this.signal.set("Signal value");
  }
}
