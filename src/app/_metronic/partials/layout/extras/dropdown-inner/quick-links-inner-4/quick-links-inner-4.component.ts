import { Component, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderMission } from 'src/app/pages/mission/mission.model';
import { MissionService } from 'src/app/pages/mission/mission.service';
import { Vehicule } from 'src/app/pages/vehicule/vehicule.model';
import { VehiculeService } from 'src/app/pages/vehicule/vehicule.service';

@Component({
  selector: 'app-quick-links-inner-4',
  templateUrl: './quick-links-inner-4.component.html',
})
export class QuickLinksInnerComponent4 {
  mission: OrderMission = {
    id: 0,
    dateOrderMission: new Date,
    lieu: '',
    dotationOrderMission:0 ,
    orderMissionPdf: '',
    id_vehicule: 0,
    id_chauffeur:0,
  };

  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown menu-column w-2500 w-lg-1000px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  message: string;
  messageType: 'success' | 'error' | '' = '';

  constructor(private missionService: MissionService) { }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.missionService.create(this.mission)
        .subscribe(
          response => {
            this.message = 'Mission added successfully!';
            this.messageType = 'success';
            this.resetForm(form);
          },
          error => {
            this.message = 'Error adding mission: ' + error.message;
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
    this.mission = {
      id: 0,
    dateOrderMission: new Date,
    lieu: '',
    dotationOrderMission:0 ,
    orderMissionPdf: '',
    id_chauffeur: 0,
    id_vehicule:0,
    };
  }
}
