import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  users :User[];
  selectedUser: User = {
    _id:'',
    userName: '',
    registrationnumber:'',
    email: '',
    phonenumber :'',
    password: '',
    cpassword:''

  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };


  constructor(private http: HttpClient) { }
  postUser(user: User){
      return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
    }
  login(authCredentials) {
      return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
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
   getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

  getUserProfiles() {
  return this.http.get(environment.apiBaseUrl + '/getuserprofiles');
}
getUserProfile() {
  return this.http.get(environment.apiBaseUrl + '/userProfile');
}
putuserprofile(user :User)
{
   this.http.put(environment.apiBaseUrl+'/updateuser',user).subscribe((res)=>{
    location.reload();
  });
  
}
deleteuserprofile(_id :string){
  if(confirm('Are you sure you want to delete this user?')==true)
      this.http.delete(environment.apiBaseUrl+'/delete'+'/'+_id).subscribe((res)=>{
        location.reload();
      }); 
}


}
