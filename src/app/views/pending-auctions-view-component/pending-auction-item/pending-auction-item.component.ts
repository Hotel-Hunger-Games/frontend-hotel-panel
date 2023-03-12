import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction-item-model';
import { PendingAuctionItemService } from './pending-auction-item.service';

@Component({
  selector: 'app-pending-auction-item',
  templateUrl: './pending-auction-item.component.html',
  styleUrls: ['./pending-auction-item.component.scss']
})
export class PendingAuctionItemComponent implements OnInit {
  @Input() auctionItem!: Auction;
  auctionItemId!: number;
  showAuctionDetailsComponent: boolean = false;

  constructor(private pendingAuctionItemService: PendingAuctionItemService
    ) { }

  ngOnInit(): void {
    this.auctionItemId = this.auctionItem.id;
  }

  public openDialog() {
    this.pendingAuctionItemService.openDialog(this.auctionItemId);
  }
}
