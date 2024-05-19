import { Component, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
/////////////////////////////////////
import { OrderPaiment} from 'src/app/pages/paiement/paiement.model';
import { PaiementService } from 'src/app/pages/paiement/paiement.service';
@Component({
  selector: 'app-quick-links-inner-6',
  templateUrl: './quick-links-inner-6.component.html',
})
export class QuickLinksInnerComponent6 {
  Paiment: OrderPaiment = {
    idOrderPaiment: 0,
    dateOrderPaiment: new Date,
    quantiteOrderPaiment:0,
    designationOrderPaiment: '',
    montantOrderPaiment:0 ,
    orderPaimentPDF: '',
    id_vehicule: 0,
  };

  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown menu-column w-2500 w-lg-1000px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  message: string;
  messageType: 'success' | 'error' | '' = '';

  constructor(private paimentService: PaiementService) { }////////////////////

  submitForm(form: NgForm) {
    if (form.valid) {
      this.paimentService.create(this.Paiment)
        .subscribe(
          response => {
            this.message = 'Paiment added successfully!';
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
    this.Paiment = {
        idOrderPaiment: 0,
        dateOrderPaiment: new Date,
        quantiteOrderPaiment:0,
        designationOrderPaiment: '',
        montantOrderPaiment:0 ,
        orderPaimentPDF: '',
        id_vehicule: 0,
    };
  }
}