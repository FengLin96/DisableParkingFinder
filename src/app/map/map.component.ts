import { Component, OnInit,Input} from '@angular/core';
import { ParkingService} from '../parking.service';
import {IParking,IData} from '../interfaces';
import { google } from '@agm/core/services/google-maps-types';
// import * as geolib from "geolib";
import * as geolocation from "geolocation";
import { debug } from 'util';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { post } from 'selenium-webdriver/http';
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
  lat:any;
  lng:any;
  zoom: Number = 14;
  geo:Geolocation;

 @Input() selectedParkingID:number;

 ngOnInit() {
  this.service.Lijst.subscribe(result=>this.datas = result);
  this.parkings = this.datas.parking;
}
  constructor(private service:ParkingService) { 
    this.getCurrentPosition();
    debugger;
  }
  
 
  dir = undefined;
 
  public getCurrentPosition():void{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        var pos = {
          lat:position.coords.latitude,
          lng:position.coords.longitude
        }
        this.lat = pos.lat;
        this.lng = pos.lng;
        
       
      });
      
    console.log(this.lat);
    console.log(this.lng);
  }
  }
  public getDirection() {
    this.dir = {
      origin: { lat: 24.799448, lng: 120.979021 },
      destination: { lat: 24.799524, lng: 120.975017 }
    }
    
  }
 

}
