import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemandeReparations } from 'src/app/pages/demande/demande.model';
import { DemandeService } from 'src/app/pages/demande/demande.service';

type Tabs =
  | 'kt_table_widget_8_tab_1'
  | 'kt_table_widget_8_tab_2'
  | 'kt_table_widget_8_tab_3';

@Component({
  selector: 'app-tables-widget8',
  templateUrl: './tables-widget8.component.html',
})
export class TablesWidget8Component implements OnInit {
  

  activeTab: Tabs = 'kt_table_widget_8_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  
  
  demandes: DemandeReparations[] = [];
  selectedDemandeReparation: DemandeReparations = new DemandeReparations();

  constructor(private demandeService: DemandeService,private cdr: ChangeDetectorRef ) { }
  ngOnInit(): void {
    this.fetchVehicules();
    
  }

  fetchVehicules(): void {
    this.demandeService.getAll().subscribe(
      data => {
        this.demandes = data;
        console.log('Tester ');
        console.log(this.demandes);
        this.cdr.detectChanges(); ///////////// Trigger change detection
        
      },
      
      error => {
        console.error('Error fetching drivers: ', error);
      }
    );
  }

  
  delete(id:any):any {
    this.demandeService.delete(id).subscribe(()=>{ this.demandes=this.demandes.filter(DemandeReparations=>DemandeReparations.id!==id);
      
    })
    ;
  }
  selectDemande(demande: DemandeReparations) {
    this.selectedDemandeReparation = { ...demande}; // Make a copy to avoid direct binding issues
  }
}
