import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Candidate} from '../../shared/candidate.model';
import {CandidateService} from'../../shared/candidate.service';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  candidates :Candidate[];
  constructor(private candidateservice :CandidateService) { }

  ngOnInit() {
      this.candidateservice.getCandidateProfiles().subscribe(
        candidates =>{
          this.candidates= candidates as Candidate[];
        })
      }
  }
  

