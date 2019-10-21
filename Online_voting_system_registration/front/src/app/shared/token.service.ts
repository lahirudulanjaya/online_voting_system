import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Token } from './token.model';
import { Observable } from 'rxjs/Observable';
import { Tokenreg } from './token.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  selectedToken:Token={
    randomstring: '',
  };

  constructor(private http: HttpClient) { }
  putToken(token: Token){
    return this.http.put(environment.apiBaseUrl+'/verify',token);
  }
  changetoken(id:Tokenreg){
    return this.http.put(environment.apiBaseUrl + '/putrandom',id);
  }

}
