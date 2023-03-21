import { TestBed } from '@angular/core/testing';

import { AuctionCreatorService } from './auction-creator.service';

describe('AuctionCreatorService', () => {
  let service: AuctionCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuctionCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
