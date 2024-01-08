import {Routes} from '@angular/router';
import {ReceivingDataComponent} from "./receiving-data/receiving-data.component";
import {DataEmitterComponent} from "./data-emitter/data-emitter.component";
import {TransformingComponent} from "./transforming/transforming.component";
import {CombiningComponent} from "./combining/combining.component";

export const routes: Routes = [
  {path: 'receiving', component: ReceivingDataComponent},
  {path: 'emitter', component: DataEmitterComponent},
  {path: 'transforming', component: TransformingComponent},
  {path: 'combining', component: CombiningComponent},
];
