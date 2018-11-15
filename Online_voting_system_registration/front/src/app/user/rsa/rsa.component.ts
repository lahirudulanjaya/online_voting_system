import { Component, OnInit } from '@angular/core';
import { RsaService} from '../../shared/rsa.service';
@Component({
  selector: 'app-rsa',
  templateUrl: './rsa.component.html',
  styleUrls: ['./rsa.component.css']
})
export class RsaComponent implements OnInit {
  arr=[];
  public;
  private;
  constructor(private rsaService :RsaService) { }

  ngOnInit() {
    
  }
  getkey(){
    this.rsaService.getkeys().subscribe(
      arr=>{
        this.arr=arr as [];
      }
    )
   
    
  }



}
