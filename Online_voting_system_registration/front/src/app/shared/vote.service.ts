import { Injectable } from '@angular/core';
import {Vote} from './vote.model';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http:HttpClient) { }

postvote(vote:Vote){
  
  return this.http.post(environment.apiBaseUrl+'/postvote',vote);

}


}