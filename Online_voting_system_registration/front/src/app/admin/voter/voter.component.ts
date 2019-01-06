import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { User } from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})

export class VoterComponent implements OnInit {
  serverErrorMessages: string;
  showSucessMessage: boolean;
  users: User[];

  constructor(private userService: UserService, private router: Router, public dialog: MatDialog) {  }
  displayedColumns: string[] = ['userName', 'registrationnumber', 'phonenumber', 'email'];
  dataSource = this.users;

  ngOnInit() {
    this.userService.getUserProfiles().subscribe(
      users => {
        this.users = users as User[];
      })
  }

  Onedit(member: User) {
    this.userService.selectedUser = member;
  }
  Onsubmit(form: NgForm) {
    this.userService.putuserprofile(form.value);
  }
  Ondelete(id: string) {
    this.userService.deleteuserprofile(id);
  }
}

