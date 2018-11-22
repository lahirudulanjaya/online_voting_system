import { Component, OnInit } from '@angular/core';
import { RsaService} from '../../shared/rsa.service';
@Component({
  selector: 'app-rsa',
  templateUrl: './rsa.component.html',
  styleUrls: ['./rsa.component.css']
})
export class RsaComponent implements OnInit {
  arr:Array<string>;
  public=null;
  private=null;
  constructor(private rsaService :RsaService) { }

  ngOnInit() {
   
    
  }
  getkey(){
    this.rsaService.getkeys().subscribe(
      arr=>{
        this.arr=arr as Array<string>;
      })
   this.public=this.arr[0];
   this.private=this.arr[1];
   
    
  }



}
