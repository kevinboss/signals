import {Component, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-data-emitter',
  standalone: true,
  imports: [],
  templateUrl: './data-emitter.component.html',
})
export class DataEmitterComponent {
  signal: WritableSignal<string> = signal("Initial value");

  update() {
    this.signal.set("Signal value");
  }
}
