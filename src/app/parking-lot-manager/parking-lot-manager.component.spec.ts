import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLotManagerComponent } from './parking-lot-manager.component';

describe('ParkingLotManagerComponent', () => {
  let component: ParkingLotManagerComponent;
  let fixture: ComponentFixture<ParkingLotManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingLotManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingLotManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
