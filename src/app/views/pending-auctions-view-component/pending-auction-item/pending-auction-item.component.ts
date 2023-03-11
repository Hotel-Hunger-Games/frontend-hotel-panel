import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction-item-model';

@Component({
  selector: 'app-pending-auction-item',
  templateUrl: './pending-auction-item.component.html',
  styleUrls: ['./pending-auction-item.component.scss']
})
export class PendingAuctionItemComponent implements OnInit {
  @Input() auctionItem!: Auction;

  constructor() { }

  ngOnInit(): void {
    console.log(this.auctionItem);
  }

}
