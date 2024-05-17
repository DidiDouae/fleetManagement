import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {PaiementComponent } from './paiement.component';

import { PaiementRoutingModule } from './paiement-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaiementRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: PaiementComponent,
      },
    ]),
  ]
})
export class PaiementModule { }
