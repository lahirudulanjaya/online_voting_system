import { Injectable } from '@angular/core';
import{ Rules} from './rules.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class RulesService {
  selectedRules:Rules ={
    election: '',
    rules: '',
  };

  constructor(private HTTP :HttpClient) { }

  postRules(rules : Rules){
    return this.HTTP.post(environment.apiBaseUrl+'/setrules',rules)
  }
}
