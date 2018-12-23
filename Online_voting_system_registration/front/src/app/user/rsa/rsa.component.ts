import { Component, OnInit } from '@angular/core';
import { RsaService} from '../../shared/rsa.service';
import * as jsPDF from 'jspdf';
import { UserService } from '../../shared/user.service';
import { Router } from "@angular/router";
import {User} from '../../shared/user.model';
import { NgForm } from '@angular/forms';

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
  constructor(private userService: UserService, private router: Router,private rsaService :RsaService) { }

 

  ngOnInit() {
    this.rsaService.getkeys().subscribe(
      arr=>{
        this.arr=arr as Array<string>;
      })
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

  getkey(){
    if(this.rsa){
    this.rsaService.getkeys().subscribe(
      arr=>{
        this.arr=arr as Array<string>;
      })
    
    this.public=this.arr[0];
    this.private=this.arr[1];
    
    }
    else{
      alert("you have already get keys");
    }
   
   
    
  }
  download()
  {
    
    let doc = new jsPDF();

    doc.text('some text here',1,1);
    doc.save('private.pdf');

  }

  
    Onsave(form: NgForm) {
    
      this.rsaService.putrsa(form.value).subscribe(
        res =>{
          this.serverErrorMessages='';
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 4000);
        },
        err =>{
          this.serverErrorMessages = err.error;
  
        } 
      )
    }
    


    
    
  }




