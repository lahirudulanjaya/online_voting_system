import { Component, OnInit } from '@angular/core';
import{ElectionService} from '../../../shared/election.service';
import{Election} from '../../../shared/election.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit {
  currentelection:Election[];
  stime;
  etime;
  starttime;
  endtime;
  now;
  distance;
  constructor(private electionService :ElectionService, private router:Router) { }

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
        this.distance = (this.endtime-this.now);
        alert(this.distance)
    
      })
  }

  verify(){
    if(this.distance<0){
      this.router.navigateByUrl('/userprofile/overview');
    }
    else{
      this.router.navigateByUrl('/userprofile/getkeys');
    }
  }


}
