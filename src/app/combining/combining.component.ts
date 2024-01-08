import {Component, computed} from '@angular/core';
import {BehaviorSubject, startWith} from "rxjs";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {toSignal} from "@angular/core/rxjs-interop";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-combining',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './combining.component.html',
})
export class CombiningComponent {
  filterControl = new FormControl('');

  private states = toSignal(new BehaviorSubject(['Ready', 'Set', 'Go']), {initialValue: []});
  private filter = toSignal(this.filterControl.valueChanges.pipe(startWith('')));
  filteredStates = computed(() => {
    const filter = this.filter();
    if (!filter) return this.states();
    return this.states().filter(state => state.toLowerCase().startsWith(filter.toLowerCase()))
  })
}
