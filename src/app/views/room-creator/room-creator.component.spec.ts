import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCreatorComponent } from './room-creator.component';

describe('RoomCreatorComponent', () => {
  let component: RoomCreatorComponent;
  let fixture: ComponentFixture<RoomCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
