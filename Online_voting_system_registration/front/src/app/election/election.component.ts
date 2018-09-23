import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
  }

}
