import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  getTotalVotes() {
    return this.http.get(environment.apiBaseUrl + '/countvotes');
  }

  getTotalCandidates() {
    return this.http.get(environment.apiBaseUrl + '/countcandidates');
  }

  getTotalRegisteredVoters() {
    return this.http.get(environment.apiBaseUrl + '/countregisteredvoters');
  }

  getPresidentResult() {
    return this.http.get(environment.apiBaseUrl + '/presidentresult');
  }

  getVicePresidentResult() {
    return this.http.get(environment.apiBaseUrl + '/vpresult');
  }

  getSecretaryResult() {
    return this.http.get(environment.apiBaseUrl + '/secretaryresult');
  }

  getTreasurerResult() {
    return this.http.get(environment.apiBaseUrl + '/treasurerresult');
  }

  getEditorResult() {
    return this.http.get(environment.apiBaseUrl + '/editorresult');
  }
}
