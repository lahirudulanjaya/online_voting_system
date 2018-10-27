import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  public myInterval: number = 3000;
    public activeSlideIndex: number = 0;
    public noWrapSlides:boolean = false;

    activeSlideChange(event: any){
        console.log(event);
    }

    public slides:Array<Object> = [
        {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg"},
        {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg"},
        {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg"},
    ];


  constructor() { }

  ngOnInit() {
  }

}
