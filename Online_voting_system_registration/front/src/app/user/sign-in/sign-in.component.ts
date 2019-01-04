import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../shared/user.service';
import {NgForm} from '@angular/forms';
import{Otp} from '../../shared/user.model';
var admin=0;
var valid;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']

})
export class SignInComponent implements OnInit {
  userDetails;
  hide = true;

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
       if(form.value.userName=="Admin")
       {
          this.router.navigateByUrl('/admin/overview');
          admin=1;
        }
      else{

        }
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
  onOtp(form: NgForm){
    this.userService.postotp(form.value).subscribe(
      res=>{
        this.userService.getvalid().subscribe(
          res=>{
            this.valid =res as boolean
            alert(this.valid);
            if(this.valid){
            this.router.navigateByUrl('/userprofile/overview');
          }
        }
      }
      err=>{
        alert('failed');
      });
  }


}
