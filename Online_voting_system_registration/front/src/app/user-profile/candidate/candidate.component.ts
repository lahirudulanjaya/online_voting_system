import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CandidateService } from '../../shared/candidate.service';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private candidateService :CandidateService) { }

  ngOnInit() {
  }
  Onsubmit(form: NgForm){
      this.candidateService.postcandidate(form.value).subscribe(
        res=>{
          this.serverErrorMessages='';
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
       
        },
        err =>{
          this.serverErrorMessages = err.error;
        }
      )
  }

}
