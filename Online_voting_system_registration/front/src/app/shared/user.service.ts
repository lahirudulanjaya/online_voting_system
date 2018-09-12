import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    userName: '',
    registrationnumber:'',
    email: '',
    password: '',
    cpassword:''

  };

  constructor(private http: HttpClient) { }
  postUser(user: User){
      return this.http.post(environment.apiBaseUrl+'/register',user);
    }
  login(authCredentials) {
      return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials);
    }
  setToken(token: string) {
      localStorage.setItem('token', token);
    }
  getToken() {
     return localStorage.getItem('token');
   }

   deleteToken() {
     localStorage.removeItem('token');
   }


}
