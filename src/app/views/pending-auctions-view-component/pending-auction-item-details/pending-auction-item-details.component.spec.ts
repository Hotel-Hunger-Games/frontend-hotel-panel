import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAuctionItemDetailsComponent } from './pending-auction-item-details.component';

describe('PendingAuctionItemDetailsComponent', () => {
  let component: PendingAuctionItemDetailsComponent;
  let fixture: ComponentFixture<PendingAuctionItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAuctionItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingAuctionItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
