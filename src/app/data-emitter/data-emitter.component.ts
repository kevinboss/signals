import {Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";
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

  update() {
    this.observable$.next("Observable value");
  }
}
