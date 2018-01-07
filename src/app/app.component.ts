import { Component,OnInit } from '@angular/core';
import { ParkingService } from './parking.service';
import {IData,IParking} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(){}
  
  ngOnInit(){
  }

  
  
}
