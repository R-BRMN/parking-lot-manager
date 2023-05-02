import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingLotManagerComponent } from './components/parking-lot-manager.component';
import { ParkedCarsComponent } from './components/parked-cars/parked-cars.component';
import { GateControlComponent } from './components/gate-control/gate-control.component';



@NgModule({
  declarations: [
    ParkingLotManagerComponent,
    ParkedCarsComponent,
    GateControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParkingLotManagerComponent
  ]
})
export class ParkingLotManagerModule { }
