import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAuctionsEndingSoonComponent } from './pending-auctions-ending-soon.component';

describe('PendingAuctionsEndingSoonComponent', () => {
  let component: PendingAuctionsEndingSoonComponent;
  let fixture: ComponentFixture<PendingAuctionsEndingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAuctionsEndingSoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingAuctionsEndingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
