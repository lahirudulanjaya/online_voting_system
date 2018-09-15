import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../shared/user.service';
import {NgForm} from '@angular/forms';

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
      password:'',
      type :null
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
  //  console.log(this.userDetails);
    this.userService.login(form.value).subscribe(
      res => {
    //    this.userService.setToken(res['token']);
      //  if(userName == "Admin"){
        //  this.router.navigateByUrl('/dashboard');
        //  this.userService.deleteToken();
        //  }
    //    else{
          this.router.navigateByUrl('/userprofile');

        

      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }


}
