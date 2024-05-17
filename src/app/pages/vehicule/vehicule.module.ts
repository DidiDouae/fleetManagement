import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehiculeComponent } from './vehicule.component';
import { WidgetsModule } from '../../_metronic/partials';

import { VehiculeRoutingModule } from './vehicule-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VehiculeRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: VehiculeComponent,
      },
    ]),
    WidgetsModule,
  ]
})
export class VehiculeModule { }
