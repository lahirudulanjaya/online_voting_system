import { Injectable } from '@angular/core';
import{ Rsa} from './rsa.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RsaService {
  
  selectedrsa:Rsa ={
      registrationnumber: '',
      publickey: '',
      
    }
  

  constructor(private http: HttpClient) { }

  getkeys(){
    return this.http.get(environment.apiBaseUrl+'/getkeys');
  }
  downloadprivate()
  {
    return this.http.get(environment.apiBaseUrl+'/privatekey',{
    responseType : 'blob',
    headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  isexist(_id:string)
  {
    return this.http.get(environment.apiBaseUrl+'/isrsa'+'/'+_id);
  } 
  putrsa(rsa : Rsa){
    return this.http.post(environment.apiBaseUrl+'/savepki',rsa);
  }
}
