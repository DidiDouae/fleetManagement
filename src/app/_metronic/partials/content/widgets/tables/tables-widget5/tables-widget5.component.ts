import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OrderPaiment} from 'src/app/pages/paiement/paiement.model';
import { PaiementService } from 'src/app/pages/paiement/paiement.service';
type Tabs =
  | 'kt_table_widget_5_tab_1'
  | 'kt_table_widget_5_tab_2'
  | 'kt_table_widget_5_tab_3';

@Component({
  selector: 'app-tables-widget5',
  templateUrl: './tables-widget5.component.html',
})
export class TablesWidget5Component implements OnInit {
 

  activeTab: Tabs = 'kt_table_widget_5_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }


  orderPaiments: OrderPaiment[] = [];
  selectedpaiement: OrderPaiment = new OrderPaiment();

  constructor(private orderpaimentservice: PaiementService,private cdr: ChangeDetectorRef ) { }
  ngOnInit(): void {
    this.fetchVehicules();
    
  }

  fetchVehicules(): void {
    this.orderpaimentservice.getAll().subscribe(
      data => {
        this.orderPaiments = data;
        console.log('Tester ');
        console.log(this.orderPaiments);
        this.cdr.detectChanges(); ///////////// Trigger change detection
        
      },
      
      error => {
        console.error('Error fetching drivers: ', error);
      }
    );
  }

  
  delete(id:any):any {
    this.orderpaimentservice.delete(id).subscribe(()=>{ this.orderPaiments=this.orderPaiments.filter(orderPaiment=>orderPaiment.idOrderPaiment!==id);
      
    })
    ;
  }
  selectedOrderPaiment(orderPaiment: OrderPaiment) {
    this.selectedpaiement = { ...orderPaiment }; // Make a copy to avoid direct binding issues
  }
}
