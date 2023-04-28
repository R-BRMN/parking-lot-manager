import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ParkingLotManagerModule } from './app/parking-lot-manager/parking-lot-manager.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ParkingLotManagerModule],
  template: `
    <app-parking-lot-manager></app-parking-lot-manager>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
