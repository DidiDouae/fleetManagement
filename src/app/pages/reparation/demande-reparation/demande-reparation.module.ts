import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  ]
})
export class DemandeReparationModule { }
