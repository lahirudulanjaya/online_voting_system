import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../shared/user.service';
import {NgForm} from '@angular/forms';
var admin=0;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']

})
export class SignInComponent implements OnInit {
  userDetails;

  constructor(private userService: UserService,private router : Router) { }
  model ={
      userName :'',
      password:''
    };
  serverErrorMessages:string;
  ngOnInit() {
   this.userService.getUserProfile().subscribe(
     res => {
       this.userDetails = res['user'];
     },
     err => {
       console.log(err);

     }
   );
 }
  onSubmit(form : NgForm){

    this.userService.login(form.value).subscribe(

      res => {
       this.userService.setToken(res['token']);
       if(form.value.userName=="Admin"){
          this.router.navigateByUrl('/dashboard');
          admin=1;
        }
      else{
          this.router.navigateByUrl('/userprofile/dashboard');
        }


      },
      err => {

        this.serverErrorMessages = err.error.message;
      }
    );
  }


}
