import { Component, OnInit } from '@angular/core';
import { ParkingService, IData } from '../parking.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  datas: IData[]
  constructor(private service:ParkingService) { }

  ngOnInit() {
    this.service.Lijst.subscribe(result=>this.datas = result);
  }

}
