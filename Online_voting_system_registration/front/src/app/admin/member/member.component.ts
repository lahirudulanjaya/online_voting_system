import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../shared/candidate.service';
import { Router } from '@angular/router';
import { Candidate } from '../../shared/candidate.model';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: []
})

export class MemberComponent implements OnInit {
  serverErrorMessages: string;
  showSucessMessage: boolean;
  candidates: Candidate[];

  constructor(private candidateService: CandidateService, private router: Router, public dialog: MatDialog) { }
  displayedColumns: string[] = ['candidatename', 'regnumber', 'degree', 'post'];
  dataSource = this.candidates;

  ngOnInit() {
    this.candidateService.getCandidateProfiles().subscribe(
      res =>{
          this.candidates=res as Candidate[];
          this.candidates.forEach(element => {
            if(element.post=="PR"){
              element.post="President"
            }
            else if(element.post=="VP"){
              element.post="Vice President"
            }
            else if(element.post=="TR"){
              element.post="Treasurer"
            }
            else if(element.post=="SE"){
              element.post="Secretary"
            }
            else if(element.post=="ED"){
              element.post="Editor"
            }
            else if(element.post=="CM"){
              element.post="Committee Member"
            }
          });
      })
      }
      Onedit(member: Candidate) {
        this.candidateService.selectedCandidate = member;
      }
      Onsubmit(form: NgForm) {
        this.candidateService.putcandidateprofile(form.value);
      }
      Ondelete(id: string) {
        this.candidateService.deletecandidateprofile(id);
      }
  }


