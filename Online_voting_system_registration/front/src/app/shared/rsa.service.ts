import { Injectable } from '@angular/core';
import{Email} from './email.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as forge from 'node-forge';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class RsaService
{  
  selectedrsa:Email ={
      _id:'',
      registrationnumber: '',
      email:'',
      publickey: '',    
    }
    private forge: any;
    


  constructor(private http: HttpClient) { 
    
  }
  getpublickey(id:string){
    return this.http.get(environment.apiBaseUrl+'/getpublic'+'/'+id);
  }

  getkeys(){
    return this.http.get(environment.apiBaseUrl+'/getkeys');
  }

  isexist(_id:string)
  {
    return this.http.get(environment.apiBaseUrl+'/isrsa'+'/'+_id);
  } 
  putrsa(rsa : Email){
    return this.http.put(environment.apiBaseUrl+'/savepki',rsa);
  }
  verifyprivate(privatekey :String,publickey:string){

    // convert PEM-formatted private key to a Forge private key
    var forgePrivateKey = forge.pki.privateKeyFromPem(privatekey);
    // get a Forge public key from the Forge private key
    var forgePublicKey = forge.pki.setRsaPublicKey(forgePrivateKey.n, forgePrivateKey.e);
    // convert the Forge public key to a PEM-formatted public key
    var publicKey = forge.pki.publicKeyToPem(forgePublicKey);
   

    var publc = forge.pki.publicKeyFromPem(publickey);
    var publicKeyy = forge.pki.publicKeyToPem(publc);
    if(publicKeyy==publicKey)
    {
      return true;
    }
    else
    {
      return false;
    }
  
   

  }
}
