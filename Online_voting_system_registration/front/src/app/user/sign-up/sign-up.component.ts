import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from "@angular/router";
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],


})
export class SignUpComponent implements OnInit {
  hide = true;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  phone =/^(\+94)[0-9]{9,9}$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private userService: UserService,private router : Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.serverErrorMessages='';
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
          setTimeout(() =>this.router.navigateByUrl('/verify'), 4000);


      },
      err => {

          this.serverErrorMessages = err.error;
      }
    );
  }

 resetForm(form: NgForm) {
    this.userService.selectedUser = {
      _id :'',
      userName: '',
      registrationnumber:'',
      email: '',
      phonenumber:'',
      password: '',
      cpassword:'',
      isvote:null


    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
