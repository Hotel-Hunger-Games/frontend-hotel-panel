import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Auction } from 'src/app/models/auction-item-model';
import { Bid } from 'src/app/models/bid-item-model';
import { DialogData } from '../pending-auctions-view-component/pending-auction-item/pending-auction-item.service';
import { BidsViewService } from './bids-view.service';

@Component({
  selector: 'app-bids-view',
  templateUrl: './bids-view.component.html',
  styleUrls: ['./bids-view.component.scss']
})
export class BidsViewComponent implements OnInit {
  public auctionId!: number;

  public bidsList: Bid[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private readonly bidsViewService: BidsViewService,
    ) { }

  ngOnInit(): void {
    this.auctionId = this.data.auctionId;
    this.subscribeToGetBidsList(this.auctionId);
  }

  private subscribeToGetBidsList(auctionId: number): void {
    this.bidsViewService.getBidsList().subscribe((data) => {
      this.bidsList = this.bidsViewService.sortListByHighestBid(this.bidsViewService.filterBidsList(auctionId, data));
    })
  };
}
