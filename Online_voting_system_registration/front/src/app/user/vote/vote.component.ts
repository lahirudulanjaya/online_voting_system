import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Candidate} from '../../shared/candidate.model';
import {CandidateService} from'../../shared/candidate.service';
import {RsaService} from '../../shared/rsa.service';
import { UserService } from '../../shared/user.service';
import {User} from '../../shared/user.model';
import {Email} from '../../shared/email.model';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  user:User;
  reg;//registration number
  candidates :Candidate[]; //for retrive candidates
  rsa:Email; //for retrive public key
  pub:string;
  pri:string;
  constructor(private candidateservice :CandidateService,private rsaservice:RsaService,private usersevice:UserService) {
    
   }
  
  ngOnInit() {
    this.usersevice.getUserProfile().subscribe(
      res =>{
        this.user= res['user'];
        this.reg=this.user.registrationnumber; 
        this.rsaservice.getpublickey(this.reg).subscribe(

          publi =>{
            this.rsa= publi as Email;
            this.pub=this.rsa.publickey;
        })  
    }
    )
    
      this.candidateservice.getCandidateProfiles().subscribe(
        candidates =>{
          this.candidates= candidates as Candidate[];
          

        })
        
        
       
        
    }
  check(){
    if(this.rsaservice.verifyprivate(this.pri,this.pub))
    {
      alert('verifyed');
    }
    else{
      alert('not verify');
    }
    
  
  }





  }
  

