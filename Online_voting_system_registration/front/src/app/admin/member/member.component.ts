import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { User } from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AddCandidateDialogComponent } from './././add-candidate-dialog/add-candidate-dialog.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [UserService]
})

export class MemberComponent implements OnInit {
  serverErrorMessages: string;
  showSucessMessage: boolean;
  users: User[];

  constructor(private userService: UserService, private router: Router, public dialog: MatDialog) { }

  openAddCandidateDialog(): void {
    const dialogRef = this.dialog.open(AddCandidateDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.userService.getUserProfiles().subscribe(
      users =>{
          //console.log(users);
          this.users=users as User[];
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


