import { Injectable } from '@angular/core';
import{ Rsa} from './rsa.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RsaService {

  constructor(private http: HttpClient) { }

  getkeys(){
    return this.http.get(environment.apiBaseUrl+'/getkeys');
  }
  
}
