import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from '../../_metronic/partials';

import { PaiementRoutingModule } from './paiement-routing.module';
import { PaiementComponent } from './paiement.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PaiementComponent
  ],
  imports: [
    CommonModule,
    PaiementRoutingModule,
    WidgetsModule ,RouterModule.forChild([
      {
        path: '',
        component: PaiementComponent,
      },
    ]),
  ]

})
export class PaiementModule { }
