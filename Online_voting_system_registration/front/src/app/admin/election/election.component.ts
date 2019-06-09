import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ElectionService } from '../../shared/election.service';
import {Election} from '../../shared/election.model';
@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css'],

  providers:[ElectionService]
})

export class ElectionComponent implements OnInit {
//   starttime: Date = new Date();
//   endtime:Date =new Date();
//   settings = {
//     bigBanner: true,
//     format: 'dd-MMM-yyyy hh:mm a',
//     defaultOpen: false,
//     timePicker: true,
//     closeOnSelect:true
// }
  showSucessMessage: boolean;
  serverErrorMessages: string;
elections:Election[];
currentelection:Election;
date;
constructor(private electionService: ElectionService) { }
displayedColumns: string[] = ['Name', 'date', 'stime', 'etime'];
dataSource = this.elections;
  ngOnInit() {
    this.electionService.getallelections().subscribe(
      res=>{
      this.elections=res as Election[];


    })
    this.electionService.getcurrentelection().subscribe(
      res=>{
        this.currentelection =res as Election;


        
      })
  }

  onSubmit(form: NgForm) {
    this.electionService.postElection(form.value).subscribe(
      res => {
        this.serverErrorMessages = '';
        this.showSucessMessage = true;
        this.electionService.getallelections().subscribe(
          res=>{
          this.elections=res as Election[];
    
    
        })
        setTimeout(() => this.showSucessMessage = false, 4000);

      },
      err => {
          this.serverErrorMessages = err.error;
      }
    );

  }
  onStart(ele:Election)
  {
      this.electionService.startelection(ele).subscribe(
        res=>{
          alert("succes");

      },
      err=>{
        alert(err.error);
      }
      )
  }

  onend(ele:Election)
  {
    this.electionService.endelection(ele).subscribe(
      res=>{
        alert('succesfully stoped');
      },
      err=>{
        alert("failed");

      }
    )
  }

}
