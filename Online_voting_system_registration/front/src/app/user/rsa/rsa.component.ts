import { Component, OnInit } from '@angular/core';
import { RsaService} from '../../shared/rsa.service';
import * as jsPDF from 'jspdf';
import { UserService } from '../../shared/user.service';
import { Router } from "@angular/router";
import {User} from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-rsa',
  templateUrl: './rsa.component.html',
  styleUrls: ['./rsa.component.css']
})
export class RsaComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  registration;
  rsa =false;
  arr:Array<string>;
  public="";
  private="";
  userDetails: User;
  constructor(private userService: UserService, private router: Router,private rsaService :RsaService,private sanitizer: DomSanitizer) { }

  fileUrl;

  ngOnInit() {

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.rsaService.isexist(this.userDetails.registrationnumber).subscribe(
          rsa=>{
            this.rsa=rsa as boolean;
            this.registration=this.userDetails.registrationnumber;
          }

        )

      },
      err => {
        console.log(err);

      }
    );




  }
  download(){
    const blob = new Blob([this.arr[1]], { type: 'application/octet-stream' });
    this.fileUrl=this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

  }

  getkey(){
    if(this.rsa==true){
    this.rsaService.getkeys().subscribe(
      arr=>{
        this.arr=arr as Array<string>;
        this.private=this.arr[1];
        this.rsaService.selectedrsa.publickey=this.arr[0];
        this.download();

      })

    this.rsaService.selectedrsa._id=this.userDetails._id;
    this.rsaService.selectedrsa.email=this.userDetails.email;
    this.rsaService.selectedrsa.registrationnumber=this.userDetails.registrationnumber;


    }
    else{
      alert("you have already get keys");
    }



  }



    Onsave(form: NgForm)
     {

      this.rsaService.putrsa(form.value).subscribe(
        res =>{
          alert('success')
        },
        err =>
        {
          alert('failed')

        }
      )
    }

  }
