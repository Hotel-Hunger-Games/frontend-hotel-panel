import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniAuctionItemComponent } from './mini-auction-item.component';

describe('MiniAuctionItemComponent', () => {
  let component: MiniAuctionItemComponent;
  let fixture: ComponentFixture<MiniAuctionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniAuctionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniAuctionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
