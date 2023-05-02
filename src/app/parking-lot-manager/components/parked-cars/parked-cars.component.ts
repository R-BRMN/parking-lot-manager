import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parked-cars',
  templateUrl: './parked-cars.component.html',
  styleUrls: ['./parked-cars.component.css']
})
export class ParkedCarsComponent {
  @Input() cars: Car[] = [];
}
