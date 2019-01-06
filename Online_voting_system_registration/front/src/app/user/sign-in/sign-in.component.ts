import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../shared/user.service';
import {NgForm} from '@angular/forms';
import{Otp} from '../../shared/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']

})

export class SignInComponent implements OnInit {
  answer;
   admin=0;
   valid=false;
   show =false;
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
       this.show=true;
       if(form.value.userName=="Admin")
       {
         this.userService.setToken(res['token']);
          this.router.navigateByUrl('/admin/overview');

        }
      else{
        // this.answer=null;
        //   //this.router.navigateByUrl('/userprofile/overview');
        // while(!this.answer){
        //       this.answer= prompt("Please enter your verificationcode:", "");
        //       this.userService.selectedOtp.otp=this.answer;
        //     }
        // this.userService.postotp(this.userService.selectedOtp).subscribe(
        //   res=>{
        //     this.userService.getvalid().subscribe(
        //       res=>{
        //         this.valid =res as boolean
        //         if(this.valid){
                this.router.navigateByUrl('/userprofile/overview');
          //       }
          //       else{
          //         this.serverErrorMessages="Invalid code";
          //         this.router.navigateByUrl('/login');
          //       }
          //   }
          //   )
          // })


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
        )
      })
}
}
