import { Component, OnInit } from '@angular/core';
import { ElectionService } from '../../shared/election.service';
import { Election} from '../../shared/election.model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
    template :'<countdown [config]="{leftTime: this.distance}">$!d!:$!h!:$!m!:$!s!</countdown>'


})

export class TimerComponent implements OnInit {
  currentelection :Election[];
  date;
  stime;
  starttime;
  endtime;
 now;
 distance;
etime;
  constructor(private electionService:ElectionService) { }

  ngOnInit() {
    this.electionService.getallelections().subscribe
    (
      res=>{
        this.currentelection =res as Election[];
          alert(this.stime);
          this.currentelection.forEach(element => {
            if(element.state==true)
            {
              alert(element.stime)
              this.stime=element.stime;
              this.etime=element.etime
            }
            
          });
       
        this.starttime = new Date(this.stime).getTime()/1000;
        this.endtime =  new Date(this.etime).getTime()/1000;
        this.now = new Date().getTime()/1000;
        this.distance = (this.endtime-this.starttime);
        alert(this.distance)
    
      })

  }

  ngOnChange(){

  }

}
