import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from '../../_metronic/partials';

import { MissionRoutingModule } from './mission-routing.module';
import { MissionComponent } from './mission.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MissionComponent
  ],
  imports: [
    CommonModule,
    MissionRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: MissionComponent,
      },
    ]),
    WidgetsModule ,
  ]
})
export class MissionModule { 
  id?: number;
    dateOrderMission?: Date;
    lieu?: string;
    dotationOrderMission?: number;
    orderMissionPdf?: string;
    id_vehicule?: number;
    id_chauffeur?:number;
}
