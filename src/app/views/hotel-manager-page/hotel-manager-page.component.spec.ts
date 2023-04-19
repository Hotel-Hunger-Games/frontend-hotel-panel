import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelManagerPageComponent } from './hotel-manager-page.component';

describe('HotelManagerPageComponent', () => {
  let component: HotelManagerPageComponent;
  let fixture: ComponentFixture<HotelManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelManagerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
