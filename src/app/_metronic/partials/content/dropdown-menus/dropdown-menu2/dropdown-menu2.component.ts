import { ChangeDetectorRef, Component, HostBinding, Input, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/pages/vehicule/vehicule.model';
import { VehiculeService } from 'src/app/pages/vehicule/vehicule.service';
import { TablesWidget13Component } from '../../widgets/tables/tables-widget13/tables-widget13.component';
@Component({
  selector: 'app-dropdown-menu2',
  templateUrl: './dropdown-menu2.component.html',
})
export class DropdownMenu2Component implements OnInit {
  vehicule: Vehicule = new Vehicule;
  errorMessage: string | null = null;
 selectedImmatricule= '' ;

  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-1000 menu-state-bg-light-primary fw-bold w-600px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  constructor(private vehiculeService: VehiculeService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('DropdownMenu2Component initialized with selectedImmatricule:', this.selectedImmatricule);
    this.searchByImmatriculation();
  }

  searchByImmatriculation(): any {
    if (this.selectedImmatricule) {
      this.vehiculeService.getByImmatriculation(this.selectedImmatricule).subscribe(
        data => {
          console.log("search by immatricule started")
          console.log(this.selectedImmatricule)
          this.vehicule = data;

          this.cdr.detectChanges();
          return data ;

        },
        error => {
          console.error('Error fetching vehicles by immatriculation: ', error);
        }
      );
    } else {
      this.vehiculeService.getAll();
    }
  }

// In your Angular component

  
}
