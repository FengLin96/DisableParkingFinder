import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../parking.service';
import { NgFor } from '@angular/common';
import {IData,IParking} from '../interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  datas: IData;
  parkings:IParking[];
  selectedParking:number;
  constructor(private service:ParkingService) {this.selectedParking = 11;}

  ngOnInit() {
    this.service.Lijst.subscribe(result=>this.datas = result);
    this.parkings = this.datas.parking;
  }

  public onSelect(id:number):void{
     this.selectedParking = id;
    }
  }
