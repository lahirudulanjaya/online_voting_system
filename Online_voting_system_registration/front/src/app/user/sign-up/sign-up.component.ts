import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

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
  phone =/^[0-9]{10,10}$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.serverErrorMessages='';
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
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
      cpassword:''


    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
