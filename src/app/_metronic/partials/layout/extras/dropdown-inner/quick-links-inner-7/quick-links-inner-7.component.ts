import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderPaiment} from 'src/app/pages/paiement/paiement.model';
import { PaiementService } from 'src/app/pages/paiement/paiement.service';/////////////////////////////////////////
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quick-links-inner-7',
  templateUrl: './quick-links-inner-7.component.html',
})
export class QuickLinksInnerComponent7 implements OnInit {

  @Input() selectedOrderPaiment: OrderPaiment = new OrderPaiment();
  message: string = '';
  messageType: 'success' | 'error' | '' = '';

  @HostBinding('class') class = 'menu menu-sub menu-sub-dropdown menu-column w-2500 w-lg-1000px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  constructor(private orderpaimentservice: PaiementService) {}

  ngOnInit() {
    // No need to subscribe here, data will be passed via @Input
  }

  updateOrderPaiment(form: NgForm) {
    if (form.valid && this.selectedOrderPaiment) {
      this.orderpaimentservice.update(this.selectedOrderPaiment).subscribe(
        () => {
          this.message = 'Chauffeur modifié avec succès !';
          this.messageType = 'success';
          this.selectedOrderPaiment = new OrderPaiment();
        },
        (error) => {
          this.message = 'Erreur lors de la modification du chauffeur : ' + error.message;
          this.messageType = 'error';
        }
      );
    } else {
      this.message = 'Le formulaire est invalide';
      this.messageType = 'error';
    }
  }
}