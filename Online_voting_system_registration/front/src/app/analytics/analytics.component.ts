import { Component, OnInit } from '@angular/core';
import { ResultService } from '../shared/result.service';
import { Result } from '../shared/result.model';
import Chart from 'chart.js';

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

  // President variables
  president: Result[];
  presidentNames: string[] = [];
  presidentVotes: number[] = [];

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

  // President
  generatePresidentResult() {
    this.president.forEach(element => {
      this.presidentNames.push(element._id);
      this.presidentVotes.push(element.count);
    });
  }

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
    // Bar chart for President results
    var pctx = "pChart";
    var pChart = new Chart(pctx, {
      type: 'horizontalBar',
      data: {
        labels: this.presidentNames,
        datasets: [{
          label: 'No. of Votes',
          data: this.presidentVotes,
          backgroundColor: 'rgba(63, 81, 181, 0.5)',
          borderColor: 'rgb(63, 81, 181)'
        }]
      },
      options: {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    setTimeout(function () { pChart.update(); }, 1000);

    // Bar chart for Vice president results
    var vpctx = "vpChart";
    var vpChart = new Chart(vpctx, {
      type: 'horizontalBar',
      data: {
        labels: this.vpNames,
        datasets: [{
          label: 'No. of Votes',
          data: this.vpVotes,
          backgroundColor: 'rgba(63, 81, 181, 0.5)',
          borderColor: 'rgb(63, 81, 181)'
        }]
      },
      options: {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    setTimeout(function () { vpChart.update(); }, 1000);

    // Bar chart for Secretary results
    var secctx = "secChart";
    var secChart = new Chart(secctx, {
      type: 'horizontalBar',
      data: {
        labels: this.secretaryNames,
        datasets: [{
          label: 'No. of Votes',
          data: this.secretaryVotes,
          backgroundColor: 'rgba(63, 81, 181, 0.5)',
          borderColor: 'rgb(63, 81, 181)'
        }]
      },
      options: {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    setTimeout(function () { secChart.update(); }, 1000);

    // Bar chart for Treasurer results
    var trctx = "trChart";
    var trChart = new Chart(trctx, {
      type: 'horizontalBar',
      data: {
        labels: this.treasurerNames,
        datasets: [{
          label: 'No. of Votes',
          data: this.treasurerVotes,
          backgroundColor: 'rgba(63, 81, 181, 0.5)',
          borderColor: 'rgb(63, 81, 181)'
        }]
      },
      options: {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    setTimeout(function () { trChart.update(); }, 1000);

    // Bar chart for Editor results
    var edctx = "edChart";
    var edChart = new Chart(edctx, {
      type: 'horizontalBar',
      data: {
        labels: this.editorNames,
        datasets: [{
          label: 'No. of Votes',
          data: this.editorVotes,
          backgroundColor: 'rgba(63, 81, 181, 0.5)',
          borderColor: 'rgb(63, 81, 181)'
        }]
      },
      options: {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    setTimeout(function () { edChart.update(); }, 1000);

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

    // Get the results of candidates running for President
    this.resultService.getPresidentResult().subscribe(
      res => {
        this.president = res as Result[];
        this.generatePresidentResult();
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
}
