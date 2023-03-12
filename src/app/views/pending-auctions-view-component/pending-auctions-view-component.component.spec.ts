import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAuctionsViewComponentComponent } from './pending-auctions-view-component.component';

describe('PendingAuctionsViewComponentComponent', () => {
  let component: PendingAuctionsViewComponentComponent;
  let fixture: ComponentFixture<PendingAuctionsViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAuctionsViewComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingAuctionsViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
