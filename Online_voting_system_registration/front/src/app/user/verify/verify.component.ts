import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { TokenService } from '../../shared/token.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private tokenService: TokenService,private router : Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.tokenService.putToken(form.value).subscribe(
      res => {
        this.serverErrorMessages='';
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 3000);
        setTimeout(() =>this.router.navigateByUrl('/login'), 4000);

      },
      err => {
          this.serverErrorMessages = err.error;
      }
    );
  }

}
