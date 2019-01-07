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
  countDownDate = new Date("Jan 7, 2019 15:05 ").getTime()/1000;
  now = new Date().getTime()/1000;
  show =true;
  alist :any[];
  showSucessMessage: boolean;
  serverErrorMessages: string;
  userDetails :User;

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

  if((this.countDownDate - this.now)<0){
    this.show=false;

  }
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'] as User;
        this.candidateService.selectedCandidate.candidatename=this.userDetails.userName;
        this.candidateService.selectedCandidate.regnumber =this.userDetails.registrationnumber;
      },
      err => {
        console.log(err);

      }
    );

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
  vote(){
    setTimeout(() =>this.router.navigateByUrl('/userprofile/voting'), 4000);

  }


}
