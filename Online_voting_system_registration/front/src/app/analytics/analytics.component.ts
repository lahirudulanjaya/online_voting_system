import { Component, OnInit } from '@angular/core';
import { ResultService } from '../shared/result.service';
import { Result } from '../shared/result.model';
import { ChartsModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {
  // Variable declaration
  totalVotes: number;
  totalCandidates: number;
  totalRegisteredVoters: number;
  vp: Result[];
  vpNames: string[] = [];
  vpVotes: number[] = [];

  constructor(private resultService: ResultService) { }

  generateVPResult() {
    this.vp.forEach(element => {
      this.vpNames.push(element._id);
      this.vpVotes.push(element.count);
    });
  }

  public ngOnInit() {

    // Get the total number of votes to varibale
    this.resultService.getTotalVotes().subscribe(
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

    // Get the total number of registered voters to variable
    this.resultService.getTotalRegisteredVoters().subscribe(
      res => {
        this.totalRegisteredVoters = res as number;
      }
    );

    // Get the results of candidates running for Vice President
    this.resultService.getVicePresidentResult().subscribe(
      res => {
        this.vp = res as Result[];
        this.generateVPResult();
      });

  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = this.vpNames;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    { data: this.vpVotes, label: 'Total Votes' },
  ];
}
