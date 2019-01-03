import { Component, OnInit } from '@angular/core';
import { ResultService } from '../shared/result.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  // Variable declaration
  totalVotes: number;
  totalCandidates: number;

  constructor(private resultService: ResultService) { }

  public ngOnInit() {

    // Get the total number of votes to varibale
    this.resultService.gettotalvotes().subscribe(
      res => {
        this.totalVotes = res as number;
      }
    );

    // Get the total number of candidates to variable
    this.resultService.getTotalCandidates().subscribe(
      res => {
        this.totalCandidates = res as number;
      }
    );
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['candidate 1', 'candidate 2', 'candidate 3', 'candidate 4', 'candidate 5', 'candidate 6', 'candidate 7'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Total Votes' },

  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
