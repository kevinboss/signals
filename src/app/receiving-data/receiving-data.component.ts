import {Component} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-receiving-data',
  standalone: true,
  imports: [],
  templateUrl: './receiving-data.component.html',
})
export class ReceivingDataComponent {
  private observable$: Observable<string> = new BehaviorSubject<string>("Observable value");

  observableData: string = "Initial value";

  subscribe() {
    this.observable$.pipe().subscribe(d => this.observableData = d);
  }
}
