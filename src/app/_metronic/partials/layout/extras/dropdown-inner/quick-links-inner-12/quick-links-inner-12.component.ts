import { Component, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarburantAnnuel } from 'src/app/pages/consommation/consommation.model';
import { ConsommationService } from 'src/app/pages/consommation/consommation.service';


@Component({
  selector: 'app-quick-links-inner-12',
  templateUrl: './quick-links-inner-12.component.html',
})
export class QuickLinksInnerComponent12 {
  carburant: CarburantAnnuel = {
    id : 0,
    carburantAnnuel : 0,
    annee:0,
    consomationIds: []
  };

  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown menu-column w-2000 w-lg-1000px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  message: string;
  messageType: 'success' | 'error' | '' = '';

  constructor(private consommationservice: ConsommationService) { }////////////////////

  submitForm(form: NgForm) {
    if (form.valid) {
      this.consommationservice.create(this.carburant)
        .subscribe(
          response => {
            this.message = 'Carburant added successfully!';
            this.messageType = 'success';
            this.resetForm(form);
          },
          error => {
            this.message = 'Error adding Paiment: ' + error.message;
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
    this.carburant = {
        id : 0,
        carburantAnnuel : 0,
        annee:0,
        consomationIds: []

};
}
}
