import { Component, HostBinding, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemandeReparations } from 'src/app/pages/demande/demande.model';
import { DemandeService } from 'src/app/pages/demande/demande.service';


@Component({
  selector: 'app-quick-links-inner-8',
  templateUrl: './quick-links-inner-8.component.html',
})
export class QuickLinksInnerComponent8  implements OnInit{
  isModalOpen: boolean = true; // Propriété pour contrôler la visibilité du modèle

  demandeReparation: DemandeReparations = {
    id: 0,
    dateDemandeReparation: new Date,
    designationDemandeReparation: '',
    demandeReparationPDF: '',
    id_vehicule: 0,
    id_chauffeur: 0,
  };

  message: string;
  messageType: 'success' | 'error' | '' = '';

  @HostBinding('class') class = 'menu menu-sub menu-sub-dropdown menu-column w-2500 w-lg-1000px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  constructor(
    private demandeService: DemandeService) { }
  ngOnInit(): void {
  

    throw new Error('Method not implemented.');
  }

 


  submitForm(form: NgForm): void {
    if (form.valid) {
      this.demandeService.create(this.demandeReparation)
        .subscribe(
          response => {
            this.message = 'Demande de réparation ajoutée avec succès !';
            this.messageType = 'success';
            this.resetForm(form);
          },
          error => {
            this.message = 'Erreur lors de l\'ajout de la demande de réparation : ' + error.message;
            this.messageType = 'error';
          }
        );
    } else {
      this.message = 'Le formulaire est invalide';
      this.messageType = 'error';
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.demandeReparation = {
      id: 0,
      dateDemandeReparation: new Date,
      designationDemandeReparation: '',
      demandeReparationPDF: '',
      id_chauffeur: 0,
      id_vehicule: 0,
    };
  }

closeModal() {
  this.isModalOpen = false; 
 
}



}
