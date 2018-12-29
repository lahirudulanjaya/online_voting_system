import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Candidate} from '../../shared/candidate.model';
import {CandidateService} from'../../shared/candidate.service';
import {RsaService} from '../../shared/rsa.service';
import { UserService } from '../../shared/user.service';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  candidates :Candidate[];
  constructor(private candidateservice :CandidateService,private rsaservice:RsaService) { }
  pub;
  pri;
  ngOnInit() {
      this.candidateservice.getCandidateProfiles().subscribe(
        candidates =>{
          this.candidates= candidates as Candidate[];

        })
        
    }
  check(){

    if(this.rsaservice.verifyprivate(this.pri,this.pub)){
      alert('verifyed');
    }
    else{
      alert('not verify');
    }
    
  
  }



  }
  

