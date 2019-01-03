import { Component, OnInit } from '@angular/core';
import { ResultService } from '../shared/result.service';
import {Result} from '../shared/result.model';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {
  // Variable declaration
  totalVotes: number;
  totalCandidates: number;
  vp : Result[];
  vice:string[] = [];
 vpvotes:number[] = [];

  constructor(private resultService: ResultService) { }

  vpresult(){
    this.vp.forEach(element => {
     this.vice.push(element._id);
      this.vpvotes.push(element.count);
      
    });
  }
  

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
    this.resultService.getvpresult().subscribe(
      res=>{
        this.vp =res as Result[];
        
          this.vpresult();
      });
      
  }

 

 

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = this.vice;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: this.vpvotes, label: 'Total Votes' },

  ];
}
