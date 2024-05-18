import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PieceComponent } from './piece.component';
import { WidgetsModule } from '../../../_metronic/partials';
import { PieceRoutingModule } from './piece-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PieceRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: PieceComponent,
      },
    ]),
    WidgetsModule
  ]
})
export class PieceModule { }
