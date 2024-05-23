import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './vehicule.component';

import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported
const routes: Routes = [
  {path:'',redirectTo :'vehicules',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule]
})
export class VehiculeRoutingModule { }
