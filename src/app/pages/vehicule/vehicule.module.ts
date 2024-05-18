import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehiculeComponent } from './vehicule.component';
import { WidgetsModule } from '../../_metronic/partials';
import { HttpClientModule } from '@angular/common/http';

import { VehiculeRoutingModule } from './vehicule-routing.module';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
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
export class VehiculeModule {
  id?: number;
  immatricule?: string;
  dateMiseCirculation?: Date;
  type?: string;
  pf?: number;
  mc?: string;
  genre?: string;
  nbrPlace?: number;
  marque?: string;
  kilometrage?: number;
  piecesIds?: number[];  
  orderPaimentsIds?: number[];  
  orderMissionIds?: number[];  
  demandeReparationIds?: number[]; 
  consomation?: number[];  
}

