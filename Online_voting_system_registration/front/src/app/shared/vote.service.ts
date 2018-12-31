import { Injectable } from '@angular/core';
import {Vote} from './vote.model';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http:HttpClient) { }

postvote(vote:Vote){
  
  return this.http.post(environment.apiBaseUrl+'/postvote',vote);

}


}