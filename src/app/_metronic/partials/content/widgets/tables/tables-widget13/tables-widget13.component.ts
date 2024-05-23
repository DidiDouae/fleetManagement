import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/pages/vehicule/vehicule.model';
import { ChangeDetectorRef } from '@angular/core';
import { VehiculeService } from 'src/app/pages/vehicule/vehicule.service';


@Component({
  selector: 'app-tables-widget13',
  templateUrl: './tables-widget13.component.html',
})
export class TablesWidget13Component implements OnInit {

  vehicules: Vehicule[] = [];
  constructor(private vehiculeService: VehiculeService,private cdr: ChangeDetectorRef ) { }
  ngOnInit(): void {
    this.fetchVehicules();
    
  }
  fetchVehicules(): void {
    this.vehiculeService.getAll().subscribe(
      data => {
        this.vehicules = data;
        this.cdr.detectChanges();
      },
      error => {
        console.error('Error fetching vehicles: ', error);
      }
    );
  }
  
  delete(id:any):any {
    this.vehiculeService.delete(id).subscribe(()=>{ this.vehicules=this.vehicules.filter(Vehicule=>Vehicule.id!==id);
      
    })
    ;
  }
 
 
}
