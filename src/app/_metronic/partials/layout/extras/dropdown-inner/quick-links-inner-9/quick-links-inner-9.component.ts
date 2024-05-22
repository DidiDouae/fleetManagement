import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemandeReparations } from 'src/app/pages/demande/demande.model';
import { DemandeService } from 'src/app/pages/demande/demande.service';

@Component({
  selector: 'app-quick-links-inner-9',
  templateUrl: './quick-links-inner-9.component.html',
})
export class QuickLinksInnerComponent9 implements OnInit {
  isModalOpen: boolean = true; // Propriété pour contrôler la visibilité du modèle

  @Input() selectedDemandeReparation: DemandeReparations = new DemandeReparations();
  message: string = '';
  messageType: 'success' | 'error' | '' = '';

  @HostBinding('class') class = 'menu menu-sub menu-sub-dropdown menu-column w-2500 w-lg-1000px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  constructor(private demandeService: DemandeService) {}

  ngOnInit() {
    // No need to subscribe here, data will be passed via @Input
  }

  EditForm(form: NgForm) {
    if (form.valid && this.selectedDemandeReparation) {
      this.demandeService.update(this.selectedDemandeReparation).subscribe(
        () => {
          this.message = 'Deamnde modifié avec succès !';
          this.messageType = 'success';
          this.selectedDemandeReparation = new DemandeReparations();
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


closeModal() {
  this.isModalOpen = false; // Fermer le modèle
}


}