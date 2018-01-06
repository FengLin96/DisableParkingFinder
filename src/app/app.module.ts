import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http/';
import { ParkingService } from './parking.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ParkingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
