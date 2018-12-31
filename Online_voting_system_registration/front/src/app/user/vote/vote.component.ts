import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Candidate} from '../../shared/candidate.model';
import {CandidateService} from'../../shared/candidate.service';
import {RsaService} from '../../shared/rsa.service';
import { UserService } from '../../shared/user.service';
import {User} from '../../shared/user.model';
import {Email} from '../../shared/email.model';
import {Vote} from '../../shared/vote.model';
import {VoteService} from '../../shared/vote.service';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  isDisabled=false;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  myModel;
  vote=new Vote();
  arr :Array<string>;
  num;
  user:User;
  reg;//registration number
  candidates :Candidate[]; //for retrive candidates
  rsa:Email; //for retrive public key
  pub:string;
  pri:string;
  constructor(private candidateservice :CandidateService,private rsaservice:RsaService,private usersevice:UserService,private voteservice:VoteService) {
    
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
    if(this.user.isvote==false){
        if(this.rsaservice.verifyprivate(this.pri,this.pub)) //compaire public private key is they matched
    {
      alert('verifyed');
      if((this.arr.length ==4) &&(this.vote.ED && this.vote.SE && this.vote.TR && this.vote.VP)){//check voter's vote is elibible or not
        alert('vote eligible');
        if(confirm("Confirm your Vote")){
         
          
          this.postvote(); // post the vote
        }
        else{

        }
        
      }
      else{
        alert('vote is not eligible');
      }
    }
    else{
      alert('not verify');
    }
  }
  else{
    alert('you have already voted');
    this.isDisabled=true;
  }
    
  
  }

  postvote(){
    this.vote.CM=this.arr;
    this.voteservice.postvote(this.vote).subscribe(
      res=>{
  
      this.serverErrorMessages='';
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 4000);
      
     
      },
      err =>{
        this.serverErrorMessages = err.error;
      }
    )
    if(!this.user.isvote){
      this.usersevice.updatevote(this.user).subscribe(
        res=>{
            alert('you have succesfully voted')
        },
        err=>{
          alert('errr');
        }
      )
    }

    
  }
  
  

  change(){ // count the number of checked box selected
    this.arr=[];
    this.num=0;
    this.candidates.forEach(item=>{
      console.log(item)
      if(item.checked){
        this.num= this.num+1
        this.arr.push(item.regnumber);
      }
      else{
      }

    })
  }
  
}
  
  

