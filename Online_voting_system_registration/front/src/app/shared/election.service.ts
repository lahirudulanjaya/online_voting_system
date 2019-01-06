import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Election } from './election.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class ElectionService {
  selectedElection:Election ={
    Name: '',
    date: '',
    stime: '',
    etime: ''
  };


constructor(private http: HttpClient) { }
postElection(election: Election){
    return this.http.post(environment.apiBaseUrl+'/setelection',election);
}
getallelections()
{
  return this.http.get(environment.apiBaseUrl+'/getallelections');
}


}
