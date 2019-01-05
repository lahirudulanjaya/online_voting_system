import { Injectable } from '@angular/core';
import {Vote} from './vote.model';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import * as forge from 'node-forge';
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
//creating digital signature

createsignature(pri:String,vote:Vote)
{
  alert(vote);
  var privKey =  forge.pki.privateKeyFromPem(pri);
  var md = forge.md.sha256.create();
  md.update(JSON.stringify(vote),"utf8");

  var sig = privKey.sign(md);
  var signature = forge.util.bytesToHex(sig);
  return signature;
}



}
