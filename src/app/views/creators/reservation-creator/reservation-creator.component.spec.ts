import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCreatorComponent } from './reservation-creator.component';

describe('ReservationCreatorComponent', () => {
  let component: ReservationCreatorComponent;
  let fixture: ComponentFixture<ReservationCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
