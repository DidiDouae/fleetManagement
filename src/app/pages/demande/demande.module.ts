import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from '../../_metronic/partials';

import { DemandeRoutingModule } from './demande-routing.module';
import { DemandeComponent } from './demande.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemandeRoutingModule,RouterModule.forChild([
      {
        path: '',
        component: DemandeComponent,
      },
    ]),
    WidgetsModule
  ]
  
})
export class DemandeModule { }
