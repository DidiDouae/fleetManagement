import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';
import { CarburantAnnuel } from 'src/app/pages/consommation/consommation.model';
import { ConsommationService } from 'src/app/pages/consommation/consommation.service';
@Component({
  selector: 'app-mixed-widget7',
  templateUrl: './mixed-widget7.component.html',
})
export class MixedWidget7Component implements OnInit {
  @Input() chartColor: string = '';
  @Input() chartHeight: string;
  chartOptions: any = {};

 

 

  carburant: CarburantAnnuel[]= [];
  restant: number= 0;
  selectedCarburant: CarburantAnnuel = new CarburantAnnuel();

  constructor(private consommationservice: ConsommationService,private cdr: ChangeDetectorRef ) { }
  ngOnInit(): void {
    this.fetchVehicules();
    this.fetchrest();
    
  }

  fetchVehicules(): void {
    this.consommationservice.getAll().subscribe(
      data => {
        this.carburant = data;
        console.log('Tester ');
        console.log(this.carburant);
        this.cdr.detectChanges(); ///////////// Trigger change detection
        
      },
      
      error => {
        console.error('Error fetching drivers: ', error);
      }
    );
  }
  fetchrest(): void {
    this.consommationservice.carburantrestant().subscribe(
      data => {
        this.restant= data;
        console.log('Tester ');
        console.log(this.restant);
        this.cdr.detectChanges(); ///////////// Trigger change detection
        
      },
      
      error => {
        console.error('Error fetching drivers: ', error);
      }
    );
  }

}

function getChartOptions(chartHeight: string, chartColor: string) {
  const baseColor = getCSSVariableValue('--bs-' + chartColor);
  const lightColor = getCSSVariableValue('--bs-light-' + chartColor);
  const labelColor = getCSSVariableValue('--bs-gray-700');

  return {
    series: [74],
    chart: {
      fontFamily: 'inherit',
      height: chartHeight,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '65%',
        },
        dataLabels: {
          name: {
            show: false,
            fontWeight: '700',
          },
          value: {
            color: labelColor,
            fontSize: '30px',
            fontWeight: '700',
            offsetY: 12,
            show: true,
            formatter: function (val: number) {
              return val + '%';
            },
          },
        },
        track: {
          background: lightColor,
          strokeWidth: '100%',
        },
      },
    },
    colors: [baseColor],
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
  };

}
