import { Component, OnInit } from '@angular/core';
import { UserService} from '../../shared/user.service';
import {Router} from'@angular/router';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  userdetails=[];
  user;
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res=>{
        this.userdetails[this.user]=res['user'];
      },
      err=>{

      }
    )
  }

}
