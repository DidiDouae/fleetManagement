import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {OrderMission } from 'src/app/pages/mission/mission.model';
import { MissionService } from 'src/app/pages/mission/mission.service';

type Tabs =
  | 'kt_table_widget_6_tab_1'
  | 'kt_table_widget_6_tab_2'
  | 'kt_table_widget_6_tab_3';

@Component({
  selector: 'app-tables-widget6',
  templateUrl: './tables-widget6.component.html',
})
export class TablesWidget6Component implements OnInit {

  activeTab: Tabs = 'kt_table_widget_6_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }


  missions: OrderMission[] = [];
  selectedMission: OrderMission = new OrderMission();

  constructor(private missionService: MissionService,private cdr: ChangeDetectorRef ) { }
  ngOnInit(): void {
    this.fetchMissions();
    
  }

  fetchMissions(): void {
    this.missionService.getAll().subscribe(
      data => {
        this.missions = data;
        console.log('Tester ');
        console.log(this.missions);
        this.cdr.detectChanges(); ///////////// Trigger change detection
        
      },
      
      error => {
        console.error('Error fetching missions: ', error);
      }
    );
  }

  
  delete(id:any):any {
    this.missionService.delete(id).subscribe(()=>{ this.missions=this.missions.filter(Mission=>Mission.id!==id);
      
    })
    ;
  }
  selectChauffeur(mission: OrderMission) {
    this.selectedMission = { ...mission}; // Make a copy to avoid direct binding issues
  }
 
}
