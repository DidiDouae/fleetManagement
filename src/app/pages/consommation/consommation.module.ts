import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ConsommationRoutingModule } from './consommation-routing.module';
import { WidgetsModule } from '../../_metronic/partials';
import {ConsommationComponent} from './consommation.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConsommationRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConsommationComponent,
      },
      
    ]),
    WidgetsModule 

  ]
})
export class ConsommationModule { }
