import { Component, OnInit } from '@angular/core';
import { Chauffeur } from 'src/app/pages/chauffeur/chauffeur.model';
import { ChauffeurService } from 'src/app/pages/chauffeur/chauffeur.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tables-widget12',
  templateUrl: './tables-widget12.component.html',
})
export class TablesWidget12Component implements OnInit {
 
  
  chauffeurs: Chauffeur[] = [];
  selectedChauffeur: Chauffeur = new Chauffeur();

  constructor(private chauffeurService: ChauffeurService,private cdr: ChangeDetectorRef ) { }
  ngOnInit(): void {
    this.fetchVehicules();
    
  }

  fetchVehicules(): void {
    this.chauffeurService.getAll().subscribe(
      data => {
        this.chauffeurs = data;
        console.log('Tester ');
        console.log(this.chauffeurs);
        this.cdr.detectChanges(); ///////////// Trigger change detection
        
      },
      
      error => {
        console.error('Error fetching drivers: ', error);
      }
    );
  }

  
  delete(id:any):any {
    this.chauffeurService.delete(id).subscribe(()=>{ this.chauffeurs=this.chauffeurs.filter(Chauffeur=>Chauffeur.id!==id);
      
    })
    ;
  }
  selectChauffeur(chauffeur: Chauffeur) {
    this.selectedChauffeur = { ...chauffeur }; // Make a copy to avoid direct binding issues
  }
 
}
