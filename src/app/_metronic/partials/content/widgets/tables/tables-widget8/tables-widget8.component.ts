import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemandeReparations } from 'src/app/pages/demande/demande.model';
import { DemandeService } from 'src/app/pages/demande/demande.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule


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
  isModalOpen: boolean = false;
  openInnerComponent() {
    this.isModalOpen = true;
  }
  years: number[] = [];
  selectedYear: number;
  months: string[] = [];
  selectedMonth: string;
  
  
  demandes: DemandeReparations[] = [];
  selectedDemandeReparation: DemandeReparations = new DemandeReparations();

  constructor(private demandeService: DemandeService,private cdr: ChangeDetectorRef ) { }
  ngOnInit(): void {
    this.fetchVehicules();
    this.initializeYears();
    this.initializeMonths();
    
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




  initializeYears(): void {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 20; year--) {
      this.years.push(year);
    }
    this.selectedYear = this.years[0]; // Default to the current year
  }

  onYearChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedYear = +target.value;
    console.log('Selected Year:', this.selectedYear);
    // Add your logic here to handle the year change
  }

  initializeMonths(): void {
    this.months = ['Mois', 
      'Janvier', 'Fevrier ', 'Mars', 'Avril', 'Mai', 'Juin', 
      'Juillet', 'Août', 'Septembre ', 'Octobre', 'Novembre', 'Decembre'
    ];
    this.selectedMonth = this.months[new Date().getMonth()]; // Default to the current month
  }

  onMonthChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedMonth = target.value;
    console.log('Selected Month:', this.selectedMonth);
    // Add your logic here to handle the month change
  }

  closeModal() {
    this.resetModal();
  }

  resetModal(): void {
    this.isModalOpen = false;
    setTimeout(() => {
      this.isModalOpen = true; // Réinitialiser l'état du modal
    }, 0); // Utilisation de setTimeout pour permettre la réinitialisation après une brève pause
  }
  
}
