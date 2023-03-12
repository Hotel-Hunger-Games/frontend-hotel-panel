import { TestBed } from '@angular/core/testing';

import { PendingAuctionItemService } from './pending-auction-item.service';

describe('PendingAuctionItemService', () => {
  let service: PendingAuctionItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingAuctionItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
