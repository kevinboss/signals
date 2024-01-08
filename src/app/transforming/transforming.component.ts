import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-transforming',
  standalone: true,
  imports: [],
  templateUrl: './transforming.component.html',
})
export class TransformingComponent {
  private signal: WritableSignal<number> = signal(1);

  value: Signal<number> = computed(() => this.signal());

  isEven: Signal<boolean> = computed(() => this.signal() % 2 === 0);

  update() {
    this.signal.set(2);
  }
}
