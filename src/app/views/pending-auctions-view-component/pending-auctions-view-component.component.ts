import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction-item-model';

@Component({
  selector: 'app-pending-auctions-view-component',
  templateUrl: './pending-auctions-view-component.component.html',
  styleUrls: ['./pending-auctions-view-component.component.scss']
})
export class PendingAuctionsViewComponentComponent implements OnInit {
  public pendingAuctions: Auction[] = [];

  constructor() { 
    let auction: Auction = {
      id: 32,
      stayEntity: '',
      startPrice: 200,
      actualPrice: 400,
      auctionEndDate: '',
      bidHistory: []
    }

    let auction2: Auction = {
      id: 64,
      stayEntity: '',
      startPrice: 300,
      actualPrice: 500,
      auctionEndDate: '',
      bidHistory: []
    }
    
    this.pendingAuctions.push(auction);
    this.pendingAuctions.push(auction2);
  }

  ngOnInit(): void {
    
  }

}
