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
    rule: '',
  };

  constructor(private HTTP :HttpClient) { }

  postRules(rules : Rules)
  {
    return this.HTTP.post(environment.apiBaseUrl+'/setrules',rules)
  }

  getRules() {
    return this.HTTP.get(environment.apiBaseUrl + '/getrules');
  }

  updateRules(rules: Rules) {
    this.HTTP.put(environment.apiBaseUrl + '/updaterule', rules).subscribe((res) => {
      location.reload();
    });
  }
}
