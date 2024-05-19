import { Component, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vehicule } from 'src/app/pages/vehicule/vehicule.model';
import { VehiculeService } from 'src/app/pages/vehicule/vehicule.service';

@Component({
  selector: 'app-quick-links-inner',
  templateUrl: './quick-links-inner.component.html',
})
export class QuickLinksInnerComponent {
  vehicule: Vehicule = {
    immatricule: '',
    dateMiseCirculation: new Date(),
    type: '',
    pf: 0,
    mc: '',
    genre: '',
    nbrPlace: 0,
    marque: '',
    kilometrage: 0
  };

  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown menu-column w-2500 w-lg-1000px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  message: string;
  messageType: 'success' | 'error' | '' = '';

  constructor(private vehiculeService: VehiculeService) { }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.vehiculeService.create(this.vehicule)
        .subscribe(
          response => {
            this.message = 'Vehicule added successfully!';
            this.messageType = 'success';
            this.resetForm(form);
          },
          error => {
            this.message = 'Error adding vehicule: ' + error.message;
            this.messageType = 'error';
          }
        );
    } else {
      this.message = 'Form is invalid';
      this.messageType = 'error';
    }
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.vehicule = {
      immatricule: '',
      dateMiseCirculation: new Date(),
      type: '',
      pf: 0,
      mc: '',
      genre: '',
      nbrPlace: 0,
      marque: '',
      kilometrage: 0
    };
  }
}
