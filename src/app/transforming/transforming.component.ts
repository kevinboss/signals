import {Component} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-transforming',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './transforming.component.html',
})
export class TransformingComponent {
  private observable$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  value$: Observable<number> = this.observable$.pipe(map(n => n));

  isEven$: Observable<boolean> = this.observable$.pipe(map(n => n % 2 === 0));

  update() {
    this.observable$.next(2);
  }
}
