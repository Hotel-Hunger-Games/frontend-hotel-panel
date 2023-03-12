import { TestBed } from '@angular/core/testing';

import { AuctionsGatewayService } from './auctions-gateway.service';

describe('AuctionsGatewayService', () => {
  let service: AuctionsGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuctionsGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
