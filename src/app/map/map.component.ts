import { Component, OnInit } from '@angular/core';
import { ParkingService,IData,IParking } from '../parking.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  datas:IData[];
  parkings:IParking[];
  lat:any;
  lng:any;
  zoom: Number = 14;

  constructor(private service:ParkingService) { }

  ngOnInit() {
    this.service.Lijst.subscribe(result=>this.datas = result);
    this.parkings. = this.datas ;

    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(currentPosition =>
      {this.lat = currentPosition.coords.latitude;
      this.lng = currentPosition.coords.longitude;
      })
    }
    else
    {
      // this.lat = 
    }
  }

  
 
  dir = undefined;
 
  public getDirection() {
    this.dir = {
      origin: { lat: 24.799448, lng: 120.979021 },
      destination: { lat: 24.799524, lng: 120.975017 }
    }
  }

}
