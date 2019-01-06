import { Component, OnInit } from '@angular/core';
import { RulesService } from '../../shared/rules.service';
import { NgForm } from '@angular/forms';
import { Rules } from '../../shared/rules.model';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  public myInterval: number = 3000;
  public activeSlideIndex: number = 0;
  public noWrapSlides: boolean = false;
  rule: Rules[];

  activeSlideChange(event: any) {
    console.log(event);
  }

  public slides: Array<Object> = [
    { "image": "https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg" },
    { "image": "https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg" },
    { "image": "https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg" },
  ];


  constructor(private rulesService: RulesService) { }
  showSucessMessage: boolean;
  serverErrorMessages: string;
  Onsubmit(form: NgForm) {
    this.rulesService.postRules(form.value).subscribe(
      res => {
        this.serverErrorMessages = '';
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
      },
      err => {
        this.serverErrorMessages = err.error;

      }
    )
  }
  ngOnInit() {
    this.rulesService.getRules().subscribe(
      res => {
        this.rule = res as Rules[];
      }
    );
  }

}
