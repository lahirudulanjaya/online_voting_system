import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Candidate} from './candidate.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  selectedCandidate:Candidate ={
    _id:'',
    election:'',
    post:'',
    candidatename :'',
    regnumber :'',
    degree :'',
    checked: false

  };
  


  constructor(private HTTP :HttpClient) {}
  postcandidate(candidate: Candidate){
    return this.HTTP.post(environment.apiBaseUrl+'/candidate',candidate);
  }
  getCandidateProfiles() {
    return this.HTTP.get(environment.apiBaseUrl + '/getcandidateprofiles');
  }

  putcandidateprofile(user :Candidate)
{
   this.HTTP.put(environment.apiBaseUrl+'/updatecandiate',user).subscribe((res)=>{
    location.reload();
  });
  
}
deletecandidateprofile(_id :string)
{
  if(confirm('Are you sure you want to delete this user?')==true)
      this.HTTP.delete(environment.apiBaseUrl+'/deletecandidate'+'/'+_id).subscribe((res)=>{
        location.reload();
      }); 
}
  
}
