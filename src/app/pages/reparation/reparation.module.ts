import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReparationRoutingModule } from './reparation-routing.module';
import { PieceComponent } from './piece/piece.component';
import { PaiementComponent } from './paiement/paiement.component';
import { DemandeReparationComponent } from './demande-reparation/demande-reparation.component';
import { WidgetsModule } from '../../_metronic/partials';


@NgModule({
  declarations: [
    PieceComponent,
    PaiementComponent,
    DemandeReparationComponent
  ],
  imports: [
    CommonModule,
    ReparationRoutingModule,
    WidgetsModule
  ]
})
export class ReparationModule { }
