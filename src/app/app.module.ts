import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http/';
import { ParkingService } from './parking.service';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core'; 
import { AgmDirectionModule } from 'agm-direction';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodayComponent } from './today/today.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MapComponent,
    HomeComponent,
    TodayComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBs8QbgcZgbfwUGe-MtHk36uiODTLwCSZg'
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ParkingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
