import { Component, HostBinding, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Piece } from 'src/app/pages/piece/piece.model';
import { PieceService } from 'src/app/pages/piece/piece.service';
import { Vehicule } from 'src/app/pages/vehicule/vehicule.model';
import { VehiculeService } from 'src/app/pages/vehicule/vehicule.service';

@Component({
  selector: 'app-quick-links-inner-11',
  templateUrl: './quick-links-inner-11.component.html',
})
export class QuickLinksInnerComponent11 {
  @Input() selectedPiece: Piece = new Piece();
  message: string = '';
  messageType: 'success' | 'error' | '' = '';

  @HostBinding('class') class = 'menu menu-sub menu-sub-dropdown menu-column w-2500 w-lg-1000px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  constructor(private pieceService: PieceService) {}

  ngOnInit() {
    // No need to subscribe here, data will be passed via @Input
  }

  updatePiece(form: NgForm) {
    if (form.valid && this.selectedPiece) {
      this.pieceService.update(this.selectedPiece).subscribe(
        () => {
          this.message = 'Pièce modifié avec succès !';
          this.messageType = 'success';
          this.selectedPiece = new Piece();
        },
        (error) => {
          this.message = 'Erreur lors de la modification du Pièce : ' + error.message;
          this.messageType = 'error';
        }
      );
    } else {
      this.message = 'Le formulaire est invalide';
      this.messageType = 'error';
    }
  }

}
