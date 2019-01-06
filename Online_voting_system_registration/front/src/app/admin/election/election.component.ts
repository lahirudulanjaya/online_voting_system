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
constructor(private electionService: ElectionService) { }
displayedColumns: string[] = ['Name', 'date', 'stime', 'etime'];
dataSource = this.elections;
  ngOnInit() {
    this.electionService.getallelections().subscribe(
      res=>{
      this.elections=res as Elections;
      alert(this.elections)
    })
  }

  onSubmit(form: NgForm) {
    this.electionService.postElection(form.value).subscribe(
      res => {
        this.serverErrorMessages = '';
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);

      },
      err => {
          this.serverErrorMessages = err.error;
      }
    );
  }

}
