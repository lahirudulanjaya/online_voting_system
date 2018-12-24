import { Injectable } from '@angular/core';
import{Email} from './email.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RsaService {
  
  selectedrsa:Email ={
    _id:'',
      registrationnumber: '',
      email:'',
      publickey: '',
      
    }
  

  constructor(private http: HttpClient) { }

  getkeys(){
    return this.http.get(environment.apiBaseUrl+'/getkeys');
  }
  downloadprivate()
  {
    return this.http.post(environment.apiBaseUrl+'/privatekey',{
    responseType : 'blob',
    headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  isexist(_id:string)
  {
    return this.http.get(environment.apiBaseUrl+'/isrsa'+'/'+_id);
  } 
  putrsa(rsa : Email){
    return this.http.put(environment.apiBaseUrl+'/savepki',rsa);
  }
}
