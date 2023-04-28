import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingLotManagerComponent } from './parking-lot-manager.component';



@NgModule({
  declarations: [
    ParkingLotManagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParkingLotManagerComponent
  ]
})
export class ParkingLotManagerModule { }
