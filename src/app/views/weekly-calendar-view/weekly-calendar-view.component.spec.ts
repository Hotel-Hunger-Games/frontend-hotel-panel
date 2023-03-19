import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyCalendarViewComponent } from './weekly-calendar-view.component';

describe('WeeklyCalendarViewComponent', () => {
  let component: WeeklyCalendarViewComponent;
  let fixture: ComponentFixture<WeeklyCalendarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyCalendarViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyCalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
