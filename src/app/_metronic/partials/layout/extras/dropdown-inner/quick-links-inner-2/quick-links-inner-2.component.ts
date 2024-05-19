import { Component, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Chauffeur } from 'src/app/pages/chauffeur/chauffeur.model';
import { ChauffeurService } from 'src/app/pages/chauffeur/chauffeur.service';

@Component({
  selector: 'app-quick-links-inner-2',
  templateUrl: './quick-links-inner-2.component.html',
})
export class QuickLinksInnerComponent2 {
  chauffeur: Chauffeur={
    nom:'',
    prenom:''  
  };
onSubmit() {
throw new Error('Method not implemented.');
}
  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown menu-column w-2500 w-lg-1000px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
vehicleForm: any;
message: string;
messageType: 'success' | 'error' | '' = '';

constructor(private chauffeurService: ChauffeurService) { }
submitForm(form: NgForm) {
    if (form.valid) {
      this.chauffeurService.create(this.chauffeur)
        .subscribe(
          response => {
            this.message = 'Chauffeur Ajouté avec succes !';
            this.messageType = 'success';
            this.resetForm(form);
          },
          error => {
            this.message = 'Error adding chauffeur : ' + error.message;
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
    this.chauffeur = {
      nom:'',
      prenom:''  
    };
  }

}
