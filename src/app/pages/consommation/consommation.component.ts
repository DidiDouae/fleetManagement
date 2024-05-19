import { Component, HostBinding, OnInit } from '@angular/core';
import { CarburantAnnuel } from './consommation.model';
import { ConsommationService } from './consommation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consommation',
  templateUrl: './consommation.component.html',
  styleUrls: ['./consommation.component.scss']
})
export class ConsommationComponent implements OnInit {


  ngOnInit(): void {
  }
 

}
