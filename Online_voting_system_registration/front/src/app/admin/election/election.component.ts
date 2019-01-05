import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ElectionService } from '../../shared/election.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css'],

  providers:[ElectionService]
})

export class ElectionComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;

constructor(private electionService: ElectionService) { }

  ngOnInit() {
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
