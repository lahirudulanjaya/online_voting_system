import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CandidateService } from '../../shared/candidate.service';
import {FileSelectDirective,FileUploader} from 'ng2-file-upload'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  uploader:FileUploader=new FileUploader({url:environment.apiBaseUrl+'/upload',itemAlias: 'candidatename'});
  alist :any[];
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private candidateService :CandidateService){
   // this.uploader.onCompleteItem =(item :any,response :any,status:any,header :any)=>{
   //   this.alist.push(JSON.parse(response));
   // }
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
  }
}
  Onsubmit(form: NgForm){
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

}
