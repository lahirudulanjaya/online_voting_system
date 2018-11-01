import { Component, OnInit } from '@angular/core';

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
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

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
                icons: [ "share"],
                imageUrl: "https://lh3.googleusercontent.com/p/AF1QipPRbjCvXYP8tpdV0RSXxoKhGXO9ssG1hFyfr47e=s1600-w400",
                subtitle: "UCSC",
                title: "University of Colombo School of Computing"
            }),
            new Card({
              content: ``,
              icons: ["share"],
              imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUOEhIQFRAVFRYVGBgVFRAVFhUXGBUWFxcVFhUYHSggGBolIBcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi8lHyUvLS8tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS8tLTUtLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEDBAUGAgj/xABMEAABAwICBQcGCwUGBgMAAAABAAIDBBEFEgYHEyExQVFhcYGRoRQigpKxwTJCUlRyg5OissLSCBUjU9EWRGKzw9M0Q0Vj4fAkJTP/xAAbAQEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADcRAQACAQIEAQwBAwMFAQAAAAABAgMEEQUSITFREyIyQWFxgZGhscHRFRRS4TTw8TNCU2LCI//aAAwDAQACEQMRAD8AnFAQEFEGDjGMQUse1nkDGE5QTckmxNg0AknceHMvLWivWW7DgyZrcuON5aen07oXuY0GYB7gxrnQzBhcTYDORbjuWEZazOyXk4XqKRO8R0jfbeN3TArYrd1UeiAgICAgIKXQEFUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBHuuKlcaeCUfBZKQ7ozt3H7tvSUfUR5q84FesZb1nvMdPgjGhgllkbDEHOkc4BrQeXjfmFrXv0KJWJmdodHltjx1nJfbaI/3D6Io2yBjRIWmTKM5bcNLrDNlB5LqyhwV+Xmnl7erfwZC9YiAgICAgINHpZpCyhhEzmPkzPDAGkDeQ51yTwHmlYZMnJG6XotHOqyTWJ22jdpqHWPSOZnmvDfgLiU9oZvb6QCwjNWe6Xk4Pni81x+d7e33dmx4O8cLXW5UvSAgICAgICAgICAgICAgICAgICAgICDmdZDAcMnvyBhHWJGWK1ZvQlYcKmY1dNvb9kb6sJsuJRi187JGdXm57/ct2qNgnz3QcYrzaS3smJ/H5TYFOcc9I9EFEFUBAQEHG61aZz8PLwbCORjyN3nAnJbsLwexac8eYteC5IrqojbvEx+UTYLhb6qdlMzi87z8lvxnHoA93OodazadnUajPXBinJb1ff1Q+h4Iw1oaOAAA6gLKy7ODmZmd5XEeCAgICAgICAgICAgICAgICAgICAgIOV1mOthk3XEO+ZgWrN6ErLhMb6unx+yINH67YVUNRyMkaT9EnK/7pKh0ty2iXVarF5XDenjH/D6HBVi4N6QEFqWdrevmQYktS49AQZVLJdvSEF5BS6CN9cGK2ZFRNO9x2r/ot3MB6zc+go2pv2qv+BYN7Wyz7o+Pd61PUDRFNUkec54iB5mtaHHvLvuhNNXpMvOPZp56447d/jKRgpKhVQEBAQEBAQEBAQEBAQEBAQEBAQEBAQc9p9T58NqBzR5/UIf+Va8seZKbw2/JqqT7dvn0QQQq92/ZPuhmIbehglvd2zDXfTZ5jvEeKscduasS4bX4fI6i9fVvvHunq28kzW8T/VZojDlqieG4eKCwgILtNJld0cqDZIPD3AbzuCD5+0oxXyqrlqL+a51mfQbub32v6RVdktzW3d1o8HkMFcfz9890paqI7YcHfKllPc7L+VS8HoOa4zO+qn3R9nZLcqhAQEBAQEBAQEBAQEBAQEBAQEBAQEBBjYjCJIZIzwdG9p6nNIXk9pZ47ct4nwmHzczgL8bKsfQrd5SLqqxgja0RPH+Kzwa8D7p7SpWnt6nOcd0/o5o90/ePy74qU50QEBAQbCkkuLcoQctrMxryejMTTaWe8becN/5ju4263Bac1tq7eK04RpvLZ+ae1ev6/fwQuATuAueAA5TyAKDHV1/vfQ2jeHCmpYqblYwB3S473n1iVZVry1iHB6rN5bNbJ4z9PU2SyaBAQEBAQEBAQEBAQEBAQEBAQEBAQEHiSQDiUGJLVE7huHijx8+YhTmOaSI/Eke3ucQPYqy0bTMPoOK8Xx1vHriPsy9HK/YVcU3IHgO+g7zXeBv2LLHbltEtOsw+WwXp7OnvjrCbyrGHCsXEsQip4zNK4NY3vJ5AByk8yxtaKx5zdgw5M1+THHVyI1kwZ7bCbJfjdmbry/8Alaf6iPBb/wAFl5fSjfw6uxoayOaNs0bg5jhcEeIPMRzLfW0TG8KXJivjvNLx1hfXrB7hkym54cvVzodeyGNNMc8sq3Sg/wAFnmRfRB3u9I7+q3MoGW/NZ23D9L/TYYrPees/r4Gg9HtcRp2EXAeXn6tpePEAdqYa72g4jl8npb2jvttHx6fbdPTVPcSqgICAgICAgICAgICAgICAgICAgIPL5AOJQYktWeTcgxiboCEx0RFrCotnXvdyStbIOu2V3i0ntUHPXa7seEZYyaaI/t3j8x93MkX3LSst9k2aKYh5RRxS3u7KGO+mzzT32v2qxx25qw4jX4fIai1fVvvHu7o50+xh09U6IH+FCSxo5C4bnu673HUOlRM1+azo+FaWMOCLz6Vus/iPk5paVo7rVbiJEslIT5rm7Ro5nNIDrdYI9VSdPbrsoeO4Imlcu3bpPulI6luacPrIx8xt8ijPnvF5CORh4N63ewdKj58m0csL3g2j55nPbtHb3+Pw+6NlDdM7rVDSZquWa26OLL2yOFvBhUnTR50ypOO5NsNaeM/ZLoUty6qAgICAgICAgICAgICAgICAgICAgxqyO4zc3sQYSAgIOD1q0d44ZwPgudGepwzD8B71G1MdpX/Acm174/GIn5dPyjlRHSO01aYyI5jSPNmSm7L8BIN1vSHi0c6kae+07SpON6WcmOMsd4jafc5TFARPMDxEsgPXnddab+lK3wzvjrPsj7MZYtjeaESluIQdLnNPSHRuHtstuGfPhB4nXfSX90T9YS5iNdHBE6eQ2YwXPOeYDnJO4BTrTFY3lx2HFbNeKU7yhHE6508z6h/wnuJtzDgG9gAHYq61uad3dYMMYccY49TFWLcmrVpgxp6IPcLSTnaHoaRZg7t/W4qfhry1cdxbUxmzzEdq9I/LrltVggICAgICAgICAgICAgICAgICAgIKEINbNHlJH/tkHhBRBqNLqHb0U0YF3Zc7fpM84DttbtWvLG9JTOH5vJamlp7b9fj0QqCq924DyjcejcR0hPaLtXUukeZHm73b3HnNrFx6TxPSvZned2GPHGOsVr2haXjN1Wg+J01OJ5p2Aubsiwhoc4El4OW/BbsNq13mVTxTT5s80pjnpO+/gwtKNJpax4FskLTdrL33/KceU+xeZMk3b9Fw+mmr42nvP6aJak9t9FMJ8qq2Qkfwx57/AKDbXHabN7VnjpzWQ9fqf6fBN/X2j3z+k8UUm7LzexWPZxDIJQcVXawmCZ8FPTTVGzJDnM4bjY2ABJF+XctM5uu0RutcfCrTSL5LxXftuu1Gn0UcMM76epAmElgGtu3ZuDTm393UvZy9N9mFeG2te1IvXzdvjv4Mca0qH4zKhvW1nucsYzw2/wALn9Ux8/8ADf0Ok1PLVSULC/bxhxcC0htmloNncvw2rZF4m3L60HJpMmPFGa3oz2XajSCnZUsonPIneAWtyusQc1vOtb4p7l7NoidmNdNltinNEebHef8AfvYk+meHse6J9QwPa4tcCH7iDYi9rcVjOWkTtu204fqb1i1aTMT1bTD8ThnbnhkZI3naQbdfMs4mJ7I2XFfFO14296ycepLlhqIA4EggyMBBG4gi/Fec1fFn/TZtt+WdvdLIbiEJbnEsRYTbNnba/Ne9r9C9iY8WE4rxO3LO/uXmyAjMCC3jcHd3r1hPSdpeg6/BBUlABQVQEBAQEBBRAQWKyO4vyj2IMFAQUQQZjlFsKmWDkY9wH0T5zPukKtvG1ph3mly+Vw0v4x/ywVi3iAgICAgkzVfh2WB9SRvldlb9Blx4uJ9UKZpq+bMuY45n5skYo/7Y3+M/4dxE/KQVIUbZXR4jetwCvw+eWsoS2SF5LnxkXIFy6xHxgLmxBv0KNNLUmbVXtNXp9Vjriz9LR2l1WiGkDK+n2wblc12R7b3AdYG7TygggrbjvF43V+u0ltLl5N947xLldUzGl1Y0hps9nEA8sg9y1YI6yseMzO2Kd/VP4U0e3aRVQ52SeOwcva/9aXup68Mx7eMfl70l3aQUZ52R+Lpmpf8A6sMdL14dk98//LG0XoIZcXropo2SNzTOAe0Ot/GAuL9Dl5SInJaJZ6vLemixWrO09I6e6f0t4nTNwzF4DT3bDPkDmXJFnSZHN6t4cOY9CTHk8nT1ssNv6zRWjL3rvtPr6RvH26tMXUDcRrBXNeY9tKG5MwIdtXfJI5FhHLzzzJfLqb6bH5DvtG/u2bPSdtF+52Oog/YeV3s/MTm2bw74W/mWV+Xyfmo+ktnnWzGf0uX6epcwLEXsoq3CZj58cEr4jzsMecgesHDoceZe0tMVmssNTii2bFqqdpmIn377fj7eLI0Z0YbW4fBI6aaN0ZnaMhG+8rjc3SlOesTMvNXq/wCn1N4isTvt39zV6C4HLXMfJ5XURGNzRZrnkEEZt/nDqWOGvN13b+I6mummKxSJ3ie6YgpbmFUBAQEBAQEBAKDWTx5Tbk5EFtAKCLtZ9Jlq2SjhLEPWYbHwLO5Q9RHnbuq4Hk5tPNPCfpLj1HXIgICAg9RsLiGtF3OIaBzkmwHekRu8m0Vjee0J2wyiEEMcDeEbA3rIG89pue1WdY2iIcFnyTlyWvPeZa/H9KqKicxlVNsjICW3ZIQQ0gHe1pA4jjzr1qeKHWPg5FvLoBzZi5vtCDmKieB75NhpBAIpXOcWOkG7OSSB524b+Sy0zjtv0st8evwctefDEzHr/bq9Dv3dRwbGOtppHOdnc7axDM6wG4B24AACyzpSKxtCFrNXbU5OeY2/SxoNhHkstTI6eme2YtLcjwSLOed/Y4LHHSazLfrtbTUUpFfV/j9LWkejtV5YMToHRmWwD2OIAdZuW4PAgiwI3cLrG+O3NzVbdLrMPkZ0+ffb1THzWsG0dr5q9uI1wjZsx5jGkHeAQ0biQAC4njxStLTfmsyzavBj084cG87+ufr+GB5HiNLidTWQ0bpWSl4HnNAIc5rs243+Lw6Vjtet5mIb4vps2kpjvk2mP8/tk4bo/XVdeyvrmNiZEWlsdwT5pJa2wJsLm5J4r2tLWtzWa8uq0+n084cE7zPefv8ATo1gfNSYnVVDqKaeJ7pAAGEje9rg4HKQeB71jEzW8ztu3zXHn0uOkZIrMbev2MjSrETV4Y/JSSwZKiPzCw3ddrruADRu38V7eZvTpGzHSYo0+qjmyRO9Z6rmm+EO8lp8SiBEkcLGS7t5jdHluerMQeh3QmSvSLQx0Gevlb6e/aZ3j3xLeaqXf/XNHNLIPvX96ywRPJ1ROMf6qZnwhptTO5tUz5LovZIPcsdP60rjnpY59k/dJSkqIQEBAQEBAQEBBYq47tvyhBr0BBw+taG8EEvKJSzscwu9rFG1MdIle8Bv/wDrevs3+U/5RsojphAQEBB0GgdHta+K/BmaU+iPN+8WrbhrvZX8Vy+T0ttvX0+aYlPcYib9oSkBp6Wo5WSyR/aMDv8ATQQmEHoIPYYOYdwQe2sHMO5BkxTvHB7x1OcPYV6MuHFqlvwaipHVNMPzLwZ0OlGIN+DWVY+ul95QZ0WnOKjhXVPa4H2hBmRaxsYH99eetlOfyXQZ0WtPFx/z43dcUXuAQZUetrFOXyZ3XEfc5BmQa3q5u7Y0luhsjfY5Dr61+k1tSx3LaKlGbjkc5l7Xtew38fFebeDK17W9KZlsYtcrvjUTeyY+9i9YsuPXFF8aklHVIw+0BBlR63aQ8aepH2R/Mgyo9a2HniypHoNPscg3OAaa0VZLsIXSbTIX2cxzfNaWg7+Hxgg6NAQEBAQEGtqI8rujiEFpByusxv8A8C/NLH7x71oz+it+CTtqvhKKFCdYICAgIO61UwXlnl+SxjB6TnE/gClaaOu6h49falK+MzPySQpTmnDa56PaYPM61zE+KQdjww+Dyg+cWlBcCD21B7CC4EHtqC41B7CD21Bcag9goPYKC40oPYQew4ILgQXAg6/VZNlxSIfKbI37hd+VBO6AgICAgILNVHdvSEGuQcprM/4D62P3rTn9Bb8E/wBVHun7IpUF1ggICAgknVTH/AnfzygeqwH8ymaaPNczx62+Wlf/AF+8y7lSFE0+mFEZ8PqoB8J8EoH0shLfEBB8ntKD21B7BQTLheqSkNBHWzVFU15pxO9o2Ia3+HtC3e0mw4cUHAav8DbX18NJIXCN4e55abODWxuduJB5co7UHU609DKLDYoDAZjJK94O0eHDIxtzYADfdzUG+1eauKGrw+KrqWzGWQvPmyvYMokc1u4dAQRppFhxp6uopG8Y5nsb0jMdnfpLS3vQSjp/oXh1Fhjp44SKi8TA4ySnznObmNi63AO3IMDU/oxS1cdRNUwtlDXsYwOLgAcpc47iOdvcg53WNSwQ4lLT08bY44xG3K2/wixriecnzrdiCRNDNXdNTwiqr2sfNlzlsltlCLXs4HcXDlJ3Dk50HRNwfCa+A7OOmkjuW54g1rmkczmgFpQQbpDhbqSplpXG5jdYH5TSA5ru1pBQT5hej9OKSOndFFfYNjccjbkmMNcb2vfighXRLDy7EqendxbOA76olzvwFB3WuWZrY6aEADM98hsAPgta386DjNB58mJUrv8AvNb692fmQfRKCiCqAgICAg11THZ3Qd6DldYcObD5LfFdG7ueAfatOf0JWfCL8urr7d4+koiUF2AgICAgljVpFagDvlySO7jk/Kp2n9ByXGbb6qY8Ij69XVLcqSwO48DuPUg+P8SpdjPLByxyPj9Vxb7kFkIL1PC6RzYm/Ce5rB1uIA9qD6g1kTCnwWqA3AQbAenaIDucgi/UDR5sQmn5Iqct7ZHt9zHd6C/+0BWg1lPD/Kp3PPXJIR7Ih3oJX0SpxTYdRwO3EQws63lmY+OYoIw0/wAFvpHTADzap1M89JY/JJ3NjB7UG9181dqWnhB3vnLyOcMjI9sgQbPUtSZMLD7b5ZpX9diIh/loOM0ZoxX6RTSuF4455pjzHZvyRj1sh9FB0+uzF3R00VG02M7i59uVkdvN7XOafRKDG1Fk7Or+Tnht15ZL+Ab3INRrFpBLjkcNr7TyZp9J2U+CCYJatomZD8Z7JHjqYYwfxhBHOEYVk0mm3eaGSVA+sY0fikd3INXrhqc1dHF/LgHe97ifANQcjhE+Sohk+RLG71XtPuQfTaAgICAgICC1Ux5m9I3hBzukNPtKSePldDJbrykjxssb+jKRpL+Tz0t4TH3QaDyqtd5KqPBAQEE1aIU+zoadvLsw49b7vP4lYYo2pDiOI35tVefbMfLo3C2IYg+X9aVJssYq2gWDpBIPrGNkNu1xQcwCg6TV3R7bFaOPk8oY89UZ2h/CgmbX1WZMLbFyzVEbexodIfFrUGs/Z6o7U9VUcr5WRdkbMx/zUHHaz3mqx6SAfLgph2hgP3nuQSzrIxgUbKFw+D5fA09EYa/Me6yDI0pwnaYlhdTb/wDKadhPQ6mkeD3x+KCO9fFWDWU8P8uAvP1jyP8ASQSVok3yXB4HO3bOlEruss2p8Sg4fULDd1ZOfhWhbfrMrneNkGq11VBdiLY+RlOy3W57yfcg7DUnSZaCSb+bO4jqY1rPaHINHG/ynSm43sieezYwEH74QdLpNiuyxvD2Xs0slY768hjfvRtQdB+7gMS8r56QxHrbK13sd4IIb1hVW0xOoPI14jHoMa0jvBQaC/Kg+oKKbPEyT5TGu7wD70F9AQEBAQUQEGqxgBjJHnczI9x6AGklY29GWeKJm9YjvvH3fPbBuHUq19Bt3l6R4ICD1FHmcGXtmIbfmubXXsd3k25YmfBP0bA0Bo4NAA6huCs3z6Z3neXpHgg+f9flGW4lHNbzZadu/ncxzmnwyoI2BQSBqPha7GYieLIpnDr2Zb7HFB2P7RTn5KPcdlmmueTPljyg9Ns3cUHX6p8LdSYRFthkc8yVDw7cWhxuM1+ByNaehBEGh8vl2kMU5BIkq5KjqazPKzuytHYg6/8AaDq7mkpr8k0h+4xp/EgkrRSvFXQ0tWbFzomOPRJkLH+OcIIO1qy+UYzPEOIMNOOvIwW9Z5QTHrEmEGEVIBsNjsR6ZbELesg4bUNWtElVTkjM5sUjRykNL2v7szO9BkaztDK2qr2T08WdkkbGE5mtEbml299zfLYg7geBQdpPNDhGFjeCIIw1vIZZTc8OdziSeYX5kEe6l4XSV89Q43c2EknndLI0k9uVxQYetPED+9nOafOgbCG9DmjajxeEE20dU2WNkzfgvY146nNDveg+bcRqdrPLN/Mke/1nE+9BaCD6P0Nnz4fSv5TTxA9YYAfEFBuEFUBAQEBBQoOP1o4kIqAxj4czhGOqxLz1WBHpLVnty1WnB8PlNTFp7V6/pDCgOvEBAQUdw3cV7Hd7G2/VPlDPtIo5Plsa71mg+9WVesQ+fZacl5r4TML69YCCIf2hqEmGkqeRr5Ij6bWuH4Hd6CE2oNxotjklDVxVsYDnROuWkkB7SC17SeS4J38hsgn+k1t4NKwOfK+M7iWSRSEg812ggnqKDi9Y+tZlVA+hog8RyDLJK8ZS5h4sjbxAPAk8lxbfdByerTH6egrvK6hshY2KRrdm0OdneWi9iRuy5u9Be1laUxYjWNqIWyNiZC2MCQNDrh73ONgTuOYdyDotX+s2GgohRzQTyFr3uaYzHbK85rHMQb5i7ssg5E4212J/vGRjnMNV5QWXAcWiXO1l+F7ADsQdbpzrKZiFIaRlO+O8jHlzntdcMN7WA57dyDjMGxSalnZUwOyysNweII4FrhytIJBHvsUEnRa53ZPOohtOiYhl+otJCDh9KdKqmvkEkxAY2+SNlwxl+JseLuk+CDL0P0vlw7a7KKJ5lyXL8+4MzWAykfKKDWYviT6mokqnhofK7MQ29huAAF+QAAIOjw/WHXQ0zKRgg2bGbMFzHl+W1hvzWuB0ciDlmcyD2Cgn/VfPnwqD/DtGerI8eyyDq0BAQEBAQUKCPtZuCVlVJAIInSMY15NnRiznFtvhEcgUfPS1p6LzhGqwYK38pbaZ2+XVxD9CsSHGmd68P6lo8jfwXH8ppP7/AKT+nn+x2I/N3evD+peeRv4H8ppP74+U/o/sdiPzd3rw/qTyN/A/lNJ/fHyn9H9jsR+bO9eH9S98hfwP5TSf3/Sf0HQ7Efm7vXh/Unkb+B/KaT/yfSf0ljBqd0dNDE7c5kTGkcxDQCO9TaRtWIclqbxfNa1e0zM/Vnxxl3ALJoZcVKBx3nwQcXrqwOSrwp0cMT5Jo5Y5GMY0ucd5YbAf4Xk9iD5/ZoDi5/6fV/ZuHtQXBoBi/wAwq/sygut1fYx8wqfVA96D23V9jHzCp7m/1QXhq7xn5hP3xfqQe2ausZP9wm7XQj2vQXRq5xn5jN69P+tB7bq5xn5jL69N/uIPY1dYz8xl9em/3EF0at8Z+ZP+0p/1oLjNW+MfM3Drkp/1oLo1a4v81P2lP+tBdZq0xf5t3ywfqQexq0xf5sPtYP1ILo1Z4t/Ib9rD/VB7bqzxX+Qz7WL+qC4NWeK/yY/tY/6oJS1cYPUUlF5PUNDXiV7gA4OGV2U8R05kHUIKoCAgICCiBZB4mjzNIQa1AQEHpkZPAIMqKkHxt/sQZICAgFAQVQEBBRBVBRAQEBAQEFUBAQEBAQEFEFUBAQEBAQEGDWR2ObkPtQWGMJ3AIMqKk5XdyDKAtuCCqAgogqgICAgogqgogIKoKICCqAgICAgICAgogIKoKICAgICCqDy9gIsUFWtA3BBVAQEBBRBVAQEBAQUQVQUQEBBVAQEBAQEBAQUugIP/2Q==",
              subtitle: "UCSC",
              title: "University of Colombo School of Computing Student Union"
          }),
            new Card({
                buttons: ["Share", "Explore"],
                imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/yosemite.jpg",
                subtitle: "Yosemite National Park",
                title: "Incipient Dawn"
            }),
            
            new Card({})
        ];
    }

}