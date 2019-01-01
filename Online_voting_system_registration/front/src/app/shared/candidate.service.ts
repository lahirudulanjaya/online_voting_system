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
  
}
