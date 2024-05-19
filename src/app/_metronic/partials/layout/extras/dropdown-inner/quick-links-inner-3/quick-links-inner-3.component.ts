import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Chauffeur } from 'src/app/pages/chauffeur/chauffeur.model';
import { ChauffeurService } from 'src/app/pages/chauffeur/chauffeur.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quick-links-inner-3',
  templateUrl: './quick-links-inner-3.component.html',
})
export class QuickLinksInnerComponent3 implements OnInit {

  @Input() selectedChauffeur: Chauffeur = new Chauffeur();
  message: string = '';
  messageType: 'success' | 'error' | '' = '';

  @HostBinding('class') class = 'menu menu-sub menu-sub-dropdown menu-column w-2500 w-lg-1000px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  constructor(private chauffeurService: ChauffeurService) {}

  ngOnInit() {
    // No need to subscribe here, data will be passed via @Input
  }

  updateChauffeur(form: NgForm) {
    if (form.valid && this.selectedChauffeur) {
      this.chauffeurService.update(this.selectedChauffeur).subscribe(
        () => {
          this.message = 'Chauffeur modifié avec succès !';
          this.messageType = 'success';
          this.selectedChauffeur = new Chauffeur();
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
