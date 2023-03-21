import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction-item';
import { Bid } from 'src/app/models/bid-item-model';
import { BidsViewService } from '../../bids-view/bids-view.service';

@Component({
  selector: 'app-pending-auction-item-details',
  templateUrl: './pending-auction-item-details.component.html',
  styleUrls: ['./pending-auction-item-details.component.scss']
})
export class PendingAuctionItemDetailsComponent implements OnInit {
  @Input() auction!: Auction;
  topBidder!: Bid;

  constructor(
    private readonly bidsViewService: BidsViewService,
  ) { }

  ngOnInit(): void {
    this.getTopBidder();
  }

  private getTopBidder() {
    this.topBidder = this.bidsViewService.sortListByHighestBid(this.auction.bidHistory)[0];
  }
}
