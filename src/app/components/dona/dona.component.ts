import { Component, Input, Output } from '@angular/core';

//gráfica
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

@Input() title:string = 'Sin título';

@Input('labels') doughnutChartLabels: string[] = ['Data1','Data2','Data3' ];

@Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [333, 333, 334],
        backgroundColor: ['#6FFF84','#F3FF35', '#FFB286']
      }],
  };
  public doughnutChartType: ChartType = 'doughnut';



}




