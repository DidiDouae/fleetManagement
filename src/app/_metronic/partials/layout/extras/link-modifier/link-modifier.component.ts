import { Component, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehiculeService } from 'src/app/pages/vehicule/vehicule.service';
import { Vehicule } from 'src/app/pages/vehicule/vehicule.model';

@Component({
  selector: 'app-link-modifier',
  templateUrl: './link-modifier.component.html',
})
export class LinkModifierComponent  {

  isMenuOpen: boolean =false;

  constructor() { }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown menu-column w-2500 w-lg-1000px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  
}
