import {Component, OnInit, signal, Signal} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-receiving-data',
  standalone: true,
  imports: [],
  templateUrl: './receiving-data.component.html',
})
export class ReceivingDataComponent {
  private observable$: Observable<string> = new BehaviorSubject<string>("Observable value");
  private signal: Signal<string> = signal("Signal value");

  observableData: string = "Initial value";
  signalData: string = "Initial value";

  subscribe() {
    this.observable$.pipe().subscribe(d => this.observableData = d);
    this.signalData = this.signal();
  }
}
