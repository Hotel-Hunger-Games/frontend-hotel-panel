import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction-item';
import { PendingAuctionsService } from './pending-auctions.service';

@Component({
  selector: 'app-pending-auctions-view-component',
  templateUrl: './pending-auctions-view-component.component.html',
  styleUrls: ['./pending-auctions-view-component.component.scss']
})
export class PendingAuctionsViewComponentComponent implements OnInit {
  public pendingAuctions: Auction[] = [];

  constructor(
    private readonly pendingAuctionsService: PendingAuctionsService,
    ) { 
  }

  ngOnInit(): void {
    this.getAllAuctions();
  }

  private getAllAuctions() {
    this.pendingAuctionsService.getAllAuctions().subscribe((auctions) => {
      this.pendingAuctions = auctions;
      console.log(auctions);
    })
  }

}
