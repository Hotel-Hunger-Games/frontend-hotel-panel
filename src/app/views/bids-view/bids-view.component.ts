import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Auction } from 'src/app/models/auction-item';
import { Bid } from 'src/app/models/bid-item-model';
import { DialogData } from '../pending-auctions-view-component/pending-auction-item/pending-auction-item.service';
import { BidsViewService } from './bids-view.service';

@Component({
  selector: 'app-bids-view',
  templateUrl: './bids-view.component.html',
  styleUrls: ['./bids-view.component.scss']
})
export class BidsViewComponent implements OnInit {
  public auction!: Auction;
  public bidsList: Bid[] = [];
  public bidsListEmpty = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private readonly bidsViewService: BidsViewService,
    ) { }

  ngOnInit(): void {
    this.auction = this.data.auction;
    this.bidsList = this.setBidsList();
  }

  private setBidsList(): Bid[] {
    let bidsHistory!: Bid[];
    this.bidsViewService.getBidsList(this.auction.id).subscribe((rec) => {
      bidsHistory = rec;
    })
    if(bidsHistory == null) {
      return bidsHistory;
    }
    this.bidsListEmpty = bidsHistory.length == 0;
    return bidsHistory;
  }

  private subscribeToGetBidsList(auctionId: number): void {
    this.bidsViewService.getBidsList(auctionId).subscribe((data) => {
      this.bidsList = this.bidsViewService.sortListByHighestBid(this.bidsViewService.filterBidsList(auctionId, data));
    })
  };
}
