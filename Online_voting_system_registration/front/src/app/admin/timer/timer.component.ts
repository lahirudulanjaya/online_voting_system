import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  template :'<countdown [config]="{leftTime: distance}">Days:$!d! Hours:$!h! Minutes:$!m! Secounds:$!s!</countdown>'


})
export class TimerComponent implements OnInit {
  countDownDate = new Date("Jan 7, 2019  15:05").getTime()/1000;
  now = new Date().getTime()/1000;
  distance = (this.countDownDate - this.now);
  constructor() { }

  ngOnInit() {

  }
  ngOnChange(){

  }

}
