import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  template :'<countdown [config]="{leftTime: distance}">$!d!:$!h!:$!m!:$!s!</countdown>'


})
export class TimerComponent implements OnInit {
  countDownDate = new Date("Jan 8, 2019 ").getTime()/1000;
  now = new Date().getTime()/1000;
  distance = (this.countDownDate - this.now);
  constructor() { }

  ngOnInit() {

  }
  ngOnChange(){

  }

}
