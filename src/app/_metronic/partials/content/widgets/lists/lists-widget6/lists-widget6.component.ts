import { ChangeDetectorRef, Component } from '@angular/core';
import { OrderMission } from 'src/app/pages/mission/mission.model';
import { MissionService } from 'src/app/pages/mission/mission.service';

@Component({
  selector: 'app-lists-widget6',
  templateUrl: './lists-widget6.component.html',
})
export class ListsWidget6Component {
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
  selectMission(mission: OrderMission) {
    this.selectedMission = { ...mission}; // Make a copy to avoid direct binding issues
  }
}
