import {Component, signal, Signal} from '@angular/core';

@Component({
  selector: 'app-receiving-data',
  standalone: true,
  imports: [],
  templateUrl: './receiving-data.component.html',
})
export class ReceivingDataComponent {
  private signal: Signal<string> = signal("Signal value");

  signalData: string = "Initial value";

  subscribe() {
    this.signalData = this.signal();
  }
}
