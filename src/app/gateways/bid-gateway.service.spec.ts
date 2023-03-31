import { TestBed } from '@angular/core/testing';

import { BidGatewayService } from './bid-gateway.service';

describe('BidGatewayService', () => {
  let service: BidGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
