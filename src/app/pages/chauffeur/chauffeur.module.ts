import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChauffeurRoutingModule } from './chauffeur-routing.module';
import { RouterModule } from '@angular/router';
import {ChauffeurComponent} from './chauffeur.component';
import { WidgetsModule } from '../../_metronic/partials';

@NgModule({
  declarations: [
    ChauffeurComponent
  ],
  imports: [
    CommonModule,
    ChauffeurRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChauffeurComponent,
      },
      
    ]),
    WidgetsModule 
  ]
})
export class ChauffeurModule {
  id?:number;
    nom?:string;
    prenom?:string;
    orderMissionIds?: number[];
    demandeReparationIds?: number[];
 }
