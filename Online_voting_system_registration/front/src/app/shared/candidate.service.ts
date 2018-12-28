import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Candidate} from './candidate.model';
@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  selectedCandidate:Candidate ={
    election:'',
    candidatename :'',
    registrationnumber :'',
    iscs :'',
    position:'',
    description:'',


  };
  


  constructor(private HTTP :HttpClient) {}
  postcandidate(candidate: Candidate){
    return this.HTTP.post(environment.apiBaseUrl+'/candidate',candidate);
  }
  getCandidateProfiles() {
    return this.HTTP.get(environment.apiBaseUrl + '/getcandidateprofiles');
  }
  
}
