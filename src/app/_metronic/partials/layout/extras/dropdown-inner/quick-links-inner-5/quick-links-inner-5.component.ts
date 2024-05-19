import { Component, HostBinding, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderMission } from 'src/app/pages/mission/mission.model';
import { MissionService } from 'src/app/pages/mission/mission.service';


@Component({
  selector: 'app-quick-links-inner-5',
  templateUrl: './quick-links-inner-5.component.html',
})
export class QuickLinksInnerComponent5 {
  
  @Input() selectedMission: OrderMission = new OrderMission();
  message: string;
  messageType: 'success' | 'error' | '' = '';
  
  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown menu-column w-2500 w-lg-1000px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  
  constructor(private missionService: MissionService) {}

  ngOnInit() {
    // No need to subscribe here, data will be passed via @Input
  }

  updateMission(form: NgForm) {
    if (form.valid && this.selectedMission) {
      this.missionService.update(this.selectedMission).subscribe(
        () => {
          this.message = 'Mission modifié avec succès !';
          this.messageType = 'success';
          this.selectedMission = new OrderMission();
        },
        (error) => {
          this.message = 'Erreur lors de la modification de la Mission : ' + error.message;
          this.messageType = 'error';
        }
      );
    } else {
      this.message = 'Le formulaire est invalide';
      this.messageType = 'error';
    }
  }
}
