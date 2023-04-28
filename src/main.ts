import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ParkingLotManagerModule } from './app/parking-lot-manager/parking-lot-manager.module';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AppModule],
  template: `
  `,
})
export class App {
  name = 'Angular';
}

platformBrowserDynamic().bootstrapModule(AppModule);
