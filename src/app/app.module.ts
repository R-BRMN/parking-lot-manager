import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ParkingLotManagerModule } from './parking-lot-manager/parking-lot-manager.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ParkingLotManagerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
