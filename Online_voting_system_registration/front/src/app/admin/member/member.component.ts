import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../shared/candidate.service';
import { Router } from '@angular/router';
import { Candidate } from '../../shared/candidate.model';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AddCandidateDialogComponent } from './././add-candidate-dialog/add-candidate-dialog.component';

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

  openAddCandidateDialog(): void {
    const dialogRef = this.dialog.open(AddCandidateDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.candidateService.getCandidateProfiles().subscribe(
      res =>{
          this.candidates=res as Candidate[];
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


