import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Piece } from 'src/app/pages/piece/piece.model';
import { PieceService } from 'src/app/pages/piece/piece.service';

@Component({
  selector: 'app-lists-widget4',
  templateUrl: './lists-widget4.component.html',
})
export class ListsWidget4Component {
  @Input() items: number = 6;
  pieces: Piece[] = [];
  selectedPiece: Piece = new Piece();

  constructor(private pieceservice: PieceService,private cdr: ChangeDetectorRef ) { }
  ngOnInit(): void {
    this.fetchVehicules();
    
  }

  fetchVehicules(): void {
    this.pieceservice.getAll().subscribe(
      data => {
        this.pieces = data;
        console.log('Tester ');
        console.log(this.pieces);
        this.cdr.detectChanges(); ///////////// Trigger change detection
        
      },
      
      error => {
        console.error('Error fetching drivers: ', error);
      }
    );
  }

  
  delete(id:any):any {
    this.pieceservice.delete(id).subscribe(()=>{ this.pieces=this.pieces.filter(Piece=>Piece.idPiece!==id);
      
    })
    ;
  }
  selectPiece(piece: Piece) {
    this.selectedPiece= { ...piece}; // Make a copy to avoid direct binding issues
  }
}
