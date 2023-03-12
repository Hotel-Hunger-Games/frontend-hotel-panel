import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAuctionItemComponent } from './pending-auction-item.component';

describe('PendingAuctionItemComponent', () => {
  let component: PendingAuctionItemComponent;
  let fixture: ComponentFixture<PendingAuctionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAuctionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingAuctionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
