import { Component, OnInit } from '@angular/core';
import { ElectionService } from '../../shared/election.service';
import { Election} from '../../shared/election.model';

@Component({
  selector: 'app-starttimer',
  templateUrl: './starttimer.component.html',
  styleUrls: ['./starttimer.component.css'],
  template :'<countdown [config]="{leftTime: distance}">$!d!:$!h!:$!m!:$!s!</countdown>'

})
export class StarttimerComponent implements OnInit {
  currentelection :Election;
  date;
  stime;
 countDownDate;
 now;
 distance;
etime;
  constructor(private electionService:ElectionService) { }

  ngOnInit() {
    this.electionService.getcurrentelection().subscribe
    (
      res=>{
        this.currentelection =res as Election;

          this.stime=this.currentelection.stime;
          this.etime=this.currentelection.etime;

        if(!this.stime)
        {
        this.countDownDate = new Date().getTime()/1000;
        }
        else
        {
        this.countDownDate = new Date(this.stime).getTime()/1000;
        }
        this.now = new Date().getTime()/1000;
        this.distance = (this.countDownDate - this.now);

      })

  }



}
