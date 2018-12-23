import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { Router } from "@angular/router";
import {User} from '../../../shared/user.model';
@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {
  userDetails :User;
  name;
  constructor(private userService: UserService, private router: Router) { }



  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.name =this.userDetails.userName;
      },
      err => { 
        console.log(err);
        
      }
    );
  }

}
