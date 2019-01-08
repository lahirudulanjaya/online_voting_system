import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CandidateService } from '../../shared/candidate.service';
import {FileSelectDirective,FileUploader} from 'ng2-file-upload'
import { environment } from '../../../environments/environment';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';
import { Router } from "@angular/router";
import { ImageSnippet } from '../../shared/candidate.model';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})

export class CandidateComponent implements OnInit {
  now = new Date().getTime()/1000;
  show = true;
  other=false;
  alist :any[];
  showSucessMessage: boolean;
  serverErrorMessages: string;
  userDetails :User;
  countDownDate;
stime;
etime;
distance;
  selectedFile: ImageSnippet;
  constructor(private candidateService :CandidateService,private userService: UserService, private router: Router){
   // this.uploader.onCompleteItem =(item :any,response :any,status:any,header :any)=>{
   //   this.alist.push(JSON.parse(response));
   // }
  }


  processFile(imageInput: any) {
      const file: File = imageInput.files[0];
      const reader = new FileReader();

      reader.addEventListener('load', (event: any) => {

        this.selectedFile = new ImageSnippet(event.target.result, file);

        this.candidateService.uploadImage(this.selectedFile.file).subscribe(
          (res) => {
            alert('success');
          },
          (err) => {
            alert('failed');
          })
      });

      reader.readAsDataURL(file);
    }
  ngOnInit() {
    this.countDownDate = new Date("Jan 9,2019 15:00").getTime()/1000;
    this.now = new Date().getTime()/1000;
    this.distance = (this.countDownDate - this.now);
    if(this.distance<0){
      this.show=false;
    }

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
