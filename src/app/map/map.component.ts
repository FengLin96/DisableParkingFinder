import { Component, OnInit,Input} from '@angular/core';
import { ParkingService} from '../parking.service';
import {IParking,IData} from '../interfaces';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  datas:IData;
  parkings:IParking[];
  currentLat:any;
  currentLng:any;
  parkingLat:any;
  parkingLng:any;
  zoom: Number = 14;
 @Input() selectedParkingID:number;
  constructor(private service:ParkingService) { 
    console.log("selectedParkingId = "+this.selectedParkingID);
  }

  ngOnInit() {
    this.service.Lijst.subscribe(result=>this.datas = result);
    this.parkings = this.datas.parking;
    
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(currentPosition =>
      {
      this.currentLat = currentPosition.coords.latitude;
      this.currentLng = currentPosition.coords.longitude;
      })
    }
    else
    {
      this.currentLat = this.parkings[0].point_lat;
      this.currentLng = this.parkings[0].point_lng;
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
