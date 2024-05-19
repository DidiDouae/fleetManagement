import { Component, OnInit } from '@angular/core';
import { VehiculeService } from './vehicule.service';
import { Vehicule } from './vehicule.model';



import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit {
  vehicules: Vehicule[] = [];
  newVehicule:any = {immatricule:'',
    dateMiseCirculation:'',
    type: '',
    pf: '',
    mc: '',
    genre: '',  
      nbrPlace: '',
    marque: '',
    kilometrage:'',
    piecesIds:'',
    orderPaimentsIds: '',
    orderMissionIds: '',
    demandeReparationIds: '',
    consommation: '',

  };
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

  delete(id:number):void {
    this.vehiculeService.delete(id).subscribe(()=>{ 

      this.vehicules=this.vehicules.filter(Vehicule=>Vehicule.id!==id);

    })
    ;
  }

  create():void{
    this.vehiculeService.create(this.newVehicule).subscribe(createdVehicule=>{
      this.vehicules.push(createdVehicule);
      this.newVehicule={immatricule:'',
      dateMiseCirculation:'',
      type: '',
      pf: '',
      mc: '',
      genre: '',  
        nbrPlace: '',
      marque: '',
      kilometrage:'',
      piecesIds:'',
      orderPaimentsIds: '',
      orderMissionIds: '',
      demandeReparationIds: '',
      consommation: ''};
    });
  }
 
  
}
