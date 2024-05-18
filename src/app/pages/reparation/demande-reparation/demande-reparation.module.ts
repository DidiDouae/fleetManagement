import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from '../../../_metronic/partials';

import { DemandeReparationRoutingModule } from './demande-reparation-routing.module';
import{DemandeReparationComponent} from './demande-reparation.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemandeReparationRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemandeReparationComponent,
      },
    ]),
    WidgetsModule
  ]
})
export class DemandeReparationModule { }
