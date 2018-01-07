import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import {IData} from './interfaces';
@Injectable()
export class ParkingService {
  constructor( private _http:HttpClient) { }

  get Lijst():Observable<IData>{

    return this._http.get<IData>("http://datasets.antwerpen.be/v4/gis/mindervalideparkings.json");
    //.do(data => { console.log(JSON.stringify(data)) });
  }
}


