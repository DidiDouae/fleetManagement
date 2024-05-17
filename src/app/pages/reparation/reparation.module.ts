import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReparationRoutingModule } from './reparation-routing.module';
import { PieceComponent } from './piece/piece.component';
import { PaiementComponent } from './paiement/paiement.component';
import { DemandeReparationComponent } from './demande-reparation/demande-reparation.component';


@NgModule({
  declarations: [
    PieceComponent,
    PaiementComponent,
    DemandeReparationComponent
  ],
  imports: [
    CommonModule,
    ReparationRoutingModule
  ]
})
export class ReparationModule { }
