import {Component, inject} from '@angular/core';
import {BehaviorSubject, combineLatest, map, startWith} from "rxjs";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
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
  private filter$ = this.filterControl.valueChanges.pipe(startWith(''));
  filteredStates$ = combineLatest([this.states$, this.filter$]).pipe(
    map(([states, filterString]) => {
      if (!filterString) return states;
      return states.filter(state => state.toLowerCase().startsWith(filterString.toLowerCase()))
    })
  );
}
