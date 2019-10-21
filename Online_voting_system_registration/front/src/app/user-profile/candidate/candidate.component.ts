import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CandidateService } from '../../shared/candidate.service';
import {FileSelectDirective,FileUploader} from 'ng2-file-upload'
import { environment } from '../../../environments/environment';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';
import { Router } from "@angular/router";
import { ImageSnippet } from '../../shared/candidate.model';
import{Election } from '../../shared/election.model';
import{ElectionService } from '../../shared/election.service';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})

export class CandidateComponent implements OnInit {
  now = new Date().getTime()/1000;
  show = false;
  other=false;
  alist :any[];
  currentelection:Election[];
  showSucessMessage: boolean;
  serverErrorMessages: string;
  userDetails :User;
  countDownDate;
  stime;
  etime;
  distance;
  starttime;
  endtime;
  edistance;
  clse=true;
  constructor(private candidateService :CandidateService,private userService: UserService, private router: Router,private electionService: ElectionService){
   // this.uploader.onCompleteItem =(item :any,response :any,status:any,header :any)=>{
   //   this.alist.push(JSON.parse(response));
   // }
  }



  ngOnInit() {
    this.electionService.getallelections().subscribe
    (
      res=>{
        this.currentelection =res as Election[];
          this.currentelection.forEach(element => {
            if(element.state==true)
            {
              this.stime=element.stime;
              this.etime=element.etime
            }
            
            
          });
       
        this.starttime = new Date(this.stime).getTime()/1000;
        this.endtime = new Date(this.etime).getTime()/1000;
        this.now = new Date().getTime()/1000;
        this.distance = (this.starttime-this.now);
        this.edistance=(this.endtime-this.now);
        if(this.distance>0){
          this.show=true;
        }
        if(this.edistance<0){
          this.clse=false;
        }
    
      })
    

    // this.userService.getUserProfile().subscribe(
    //   res => {
    //     this.userDetails = res['user'] as User;
    //     this.candidateService.selectedCandidate.candidatename=this.userDetails.userName;
    //     this.candidateService.selectedCandidate.regnumber =this.userDetails.registrationnumber;
    //     if((this.stime - this.now)<0){
    //       this.show=true;
    //       this.other=false;
    //       alert(this.stime - this.now);
    //     }
    //     else{
    //       this.other=true;
    //       this.show=false;
    //     }
    //   },
    //   err => {
    //     console.log(err);
    //
    //   }
    // );

}
  Onsubmit(form: NgForm)
  {
      this.candidateService.postcandidate(form.value).subscribe(
        res=>{
          this.serverErrorMessages='';
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);

        },
        err =>{
          this.serverErrorMessages = err.error;
        }
      )
  }
  vote()
  {
    setTimeout(() =>this.router.navigateByUrl('/userprofile/voting'), 4000);

  }




}
