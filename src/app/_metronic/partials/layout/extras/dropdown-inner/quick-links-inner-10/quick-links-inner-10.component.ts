import { Component, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Piece } from 'src/app/pages/piece/piece.model';
import { PieceService } from 'src/app/pages/piece/piece.service';


@Component({
  selector: 'app-quick-links-inner-10',
  templateUrl: './quick-links-inner-10.component.html',
})
export class QuickLinksInnerComponent10 {
  piece: Piece = {
    idPiece: 0,
    dure_vie: 0,
    description: '',
    date_echeance: new Date,
    date_changement: new Date,
    id_vehicule: 0,
  };

  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown menu-column w-2500 w-lg-1000px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  message: string;
  messageType: 'success' | 'error' | '' = '';

  constructor(private pieceservice: PieceService) { }////////////////////

  submitForm(form: NgForm) {
    if (form.valid) {
      this.pieceservice.create(this.piece)
        .subscribe(
          response => {
            this.message = 'Pièce ajouter avec succès!';
            this.messageType = 'success';
            this.resetForm(form);
          },
          error => {
            this.message = 'Erreur dans  ajout de la Pièce: ' + error.message;
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
    this.piece = {
        idPiece: 0,
        dure_vie: 0,
        description: '',
        date_echeance: new Date,
        date_changement: new Date,
        id_vehicule: 0,
    };
  }

}
