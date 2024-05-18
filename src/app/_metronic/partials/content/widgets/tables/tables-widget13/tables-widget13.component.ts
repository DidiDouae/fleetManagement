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
        console.log('Tester ');
        console.log(this.vehicules);
        this.cdr.detectChanges(); ///////////// Trigger change detection
        
      },
      
      error => {
        console.error('Error fetching vehicles: ', error);
      }
    );
  }
 
}
