import { TestBed } from '@angular/core/testing';

import { BidsViewService } from './bids-view.service';

describe('BidsViewService', () => {
  let service: BidsViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidsViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
