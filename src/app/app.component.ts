import { Component,OnInit } from '@angular/core';
import { IParking, ParkingService, IData } from './parking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  parkings:IData[];
  constructor(private service:ParkingService){}
  
  ngOnInit(){
    this.service.Lijst.subscribe(result=>this.parkings = result);
    console.log(this.parkings);
  }

  
  
}
