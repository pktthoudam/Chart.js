import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from "node_modules/chart.js";
import { ApiServiceService } from '../api-service.service';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  label: any = [];
  data: any = [];

  chartData: any;

  ngOnInit(): void {

    this.apiService.getMarks().subscribe({
      next: (value) => {
        console.log(value, 'res')

        this.label = value.map((item:any) => {
           return item.name;

        })
      
        // value.forEach((element: any) => {
        //   this.label.push(element.name);         
        // })

        this.data = value.map((item: any) => {
          return item.score
        })
        

        // if (value != null) {
        //   for (let i = 0; i < value.length; i++) {
        //     // console.log(value[i]);
        //     this.label[i] = value[i].name;
        //     this.data[i] = value[i].score
        //     console.log(this.label);
        //     console.log(this.data);
        //   }
        // }

        this.renderChart(this.label, this.data);
        console.log(this.label);
      }
    })
  }

  renderChart(label: [], data: []) {
    new Chart("barChart", {
      type: 'bar',
      data: {
        // labels: ['Jyoti', 'Meena', 'PuspaRaj', 'Priya', 'John Doe', 'Rahul'],
        labels: label,
        datasets: [{
          label: 'Students Marks in Test',
          // data: [80, 62, 73, 45, 92, 63],
          data: data,
          borderWidth: 1,
          // backgroundColor: "red"

        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
