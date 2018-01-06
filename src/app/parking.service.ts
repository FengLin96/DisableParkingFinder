import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class ParkingService {
  constructor( private _http:HttpClient) { }

}

export interface Parking{
   
       id: number,
       objectid: number,
       point_lat: string,
       point_lng: string,
       aantal_plaatsen: string,
       kleur: string,
       jrnr_gr_cbs: string,
       adres: string,
       start_date: string,
       gisid: string 
  

  }
