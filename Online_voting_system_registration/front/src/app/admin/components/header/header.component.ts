import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { Router } from "@angular/router";
import {User} from '../../../shared/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    
  }
  logout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
