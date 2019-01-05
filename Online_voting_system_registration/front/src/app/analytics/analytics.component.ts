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

  // Vice president variables
  vp: Result[];
  vpNames: string[] = [];
  vpVotes: number[] = [];

  // Secretary variables
  secretary: Result[];
  secretaryNames: string[] = [];
  secretaryVotes: number[] = [];

  // Treasurer variables
  treasurer: Result[];
  treasurerNames: string[] = [];
  treasurerVotes: number[] = [];

  // Editor variables
  editor: Result[];
  editorNames: string[] = [];
  editorVotes: number[] = [];

  constructor(private resultService: ResultService) { }

  // Vice president
  generateVPResult() {
    this.vp.forEach(element => {
      this.vpNames.push(element._id);
      this.vpVotes.push(element.count);
    });
  }

  // Secretary
  generateSecretaryResult() {
    this.secretary.forEach(element => {
      this.secretaryNames.push(element._id);
      this.secretaryVotes.push(element.count);
    });
  }

  // Treasurer
  generateTreasurerResult() {
    this.treasurer.forEach(element => {
      this.treasurerNames.push(element._id);
      this.treasurerVotes.push(element.count);
    });
  }

  // Editor
  generateEditorResult() {
    this.editor.forEach(element => {
      this.editorNames.push(element._id);
      this.editorVotes.push(element.count);
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
      }
    );

    // Get the results of candidates running for Secretary
    this.resultService.getSecretaryResult().subscribe(
      res => {
        this.secretary = res as Result[];
        this.generateSecretaryResult();
      }
    );

    // Get the results of candidates running for Treasurer
    this.resultService.getTreasurerResult().subscribe(
      res => {
        this.treasurer = res as Result[];
        this.generateTreasurerResult();
      }
    );

    // Get the results of candidates running for Editor
    this.resultService.getEditorResult().subscribe(
      res => {
        this.editor = res as Result[];
        this.generateEditorResult();
      }
    );

  }

  // Styling and options for all bar charts
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartColors: any[] = [
    { backgroundColor: 'rgba(63, 81, 181, 0.5)', borderColor: 'rgb(63, 81, 181)' }
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  // Bar chart for Vice president results
  public vpBarChartLabels = this.vpNames;
  public vpBarChartData: any[] = [
    { data: this.vpVotes, label: 'Total Votes' },
  ];

  // Bar chart for Secretary results
  public secretaryBarChartLabels = this.secretaryNames;
  public secretaryBarChartData: any[] = [
    { data: this.secretaryVotes, label: 'Total Votes' },
  ];

  // Bar chart for Treasurer results
  public treasurerBarChartLabels = this.treasurerNames;
  public treasurerBarChartData: any[] = [
    { data: this.treasurerVotes, label: 'Total Votes' },
  ];

  // Bar chart for Editor results
  public editorBarChartLabels = this.editorNames;
  public editorBarChartData: any[] = [
    { data: this.editorVotes, label: 'Total Votes' },
  ];
}
