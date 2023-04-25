import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelStatisticsPageComponent } from './hotel-statistics-page.component';

describe('HotelStatisticsPageComponent', () => {
  let component: HotelStatisticsPageComponent;
  let fixture: ComponentFixture<HotelStatisticsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelStatisticsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelStatisticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
