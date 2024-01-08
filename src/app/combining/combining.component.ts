import {Component, computed, inject} from '@angular/core';
import {BehaviorSubject, combineLatest, map, startWith} from "rxjs";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {toSignal} from "@angular/core/rxjs-interop";
import {AsyncPipe, NgForOf} from "@angular/common";
import {DummyService} from "../dummy.service";

@Component({
  selector: 'app-combining',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './combining.component.html',
})
export class CombiningComponent {
  filterControl = new FormControl('');

  private states$ = inject(DummyService).states();
  private states = toSignal(this.states$, {initialValue: []});
  private filter$ = this.filterControl.valueChanges.pipe(startWith(''));
  private filter = toSignal(this.filter$);
  filteredStates$ = combineLatest([this.states$, this.filter$]).pipe(
    map(([states, filterString]) => {
      if (!filterString) return states;
      return states.filter(state => state.toLowerCase().startsWith(filterString.toLowerCase()))
    })
  );
  filteredStates = computed(() => {
    const filter = this.filter();
    if (!filter) return this.states();
    return this.states().filter(state => state.toLowerCase().startsWith(filter.toLowerCase()))
  })
}
