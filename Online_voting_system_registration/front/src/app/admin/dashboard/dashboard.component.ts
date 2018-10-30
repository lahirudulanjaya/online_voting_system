import { Component } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';

interface ICard {
  title?: string;
  subtitle?: string;
  content?: string;
  imageUrl?: string;
  avatarUrl?: string;
  buttons?: string[];
  icons?: string[];
}

class Card {
  public title: string;
  public subtitle: string;
  public content: string;
  public imageUrl: string;
  public avatarUrl: string;
  public buttons: string[];
  public icons: string[];

  constructor(obj?: ICard) {
      this.title = obj.title || "Card Title";
      this.subtitle = obj.subtitle || "Card Subtitle";
      this.content = obj.content ||
          "Some card content should be placed here. Description or other related information.";
      this.imageUrl = obj.imageUrl || "https://www.infragistics.com/angular-demos/assets/images/card/media/placeholder.jpg";
      this.avatarUrl = obj.avatarUrl || "https://www.infragistics.com/angular-demos/assets/images/card/avatars/rupert_stadler.jpg";
      this.buttons = obj.buttons || ["ACTION1", "ACTION2"];
      this.icons = obj.icons || ["favorite", "bookmark", "share"];
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public imageUrls;
 

  /** Based on the screen size, switch from standard to one column per row */
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['candidate 1', 'candidate 2', 'candidate 3', 'candidate 4', 'candidate 5', 'candidate 6', 'candidate 7'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Total Votes'},
    
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  public cards: Card[];
    constructor() { }

    public ngOnInit() {
        this.cards = [
            new Card({
                content: `The University of Colombo School of Computing (UCSC) is a higher educational institute affiliated to the University of Colombo in Sri Lanka providing Computer Science and Information and Communication Technology education.`,
                icons: ["favorite", "bookmark", "share"],
                imageUrl: "https://lh3.googleusercontent.com/p/AF1QipPRbjCvXYP8tpdV0RSXxoKhGXO9ssG1hFyfr47e=s1600-w400",
                subtitle: "UCSC",
                title: "University of Colombo School of Computing"
            }),
            new Card({
                icons: ["favorite", "bookmark", "share"],
                imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/the_red_ice_forest.jpg"
            }),
            new Card({
                buttons: ["Share", "Explore"],
                imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/yosemite.jpg",
                subtitle: "Yosemite National Park",
                title: "Incipient Dawn"
            }),
            new Card({
                content: `Nico Erik Rosberg is a German former Formula One racing driver
              and current Formula One World Champion who drove for Williams F1 and
              Mercedes AMG Petronas under the German flag.`,
                subtitle: "Racing Driver",
                title: "Nico Rosberg"
            }),
            new Card({
                avatarUrl: "https://www.infragistics.com/angular-demos/assets/images/card/avatars/mellow_d.jpg",
                buttons: ["share", "play album"],
                imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/here_media.jpg",
                subtitle: "by Melow D",
                title: "HERE"
            }),
            new Card({
                buttons: ["Comment", "Explore"],
                icons: ["favorite", "share"],
                imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/monuments.jpg"
            }),
            new Card({
                avatarUrl: "https://www.infragistics.com/angular-demos/assets/images/card/avatars/brad_stanley.jpg",
                buttons: ["message", "follow"],
                icons: ["add", "star"],
                imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/audi.jpg",
                subtitle: "January 30, 2017",
                title: "Brad Stanley"
            }),
            new Card({})
        ];
    }

}
  

