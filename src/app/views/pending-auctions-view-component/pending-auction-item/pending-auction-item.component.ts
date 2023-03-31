import { Component, Input, OnInit } from '@angular/core';
import { AuctionApiResponse } from 'src/app/models/auction-api-response';
import { Auction } from 'src/app/models/auction-item';
import { Stay } from 'src/app/models/stay-item-model';
import { PendingAuctionItemService } from './pending-auction-item.service';

@Component({
  selector: 'app-pending-auction-item',
  templateUrl: './pending-auction-item.component.html',
  styleUrls: ['./pending-auction-item.component.scss']
})
export class PendingAuctionItemComponent implements OnInit {
  @Input() auctionApiResponse!: AuctionApiResponse;
  auctionItem!: Auction;
  stayItem!: Stay;
  showAuctionDetailsComponent: boolean = false;

  constructor(private pendingAuctionItemService: PendingAuctionItemService
    ) { }

  ngOnInit(): void {
    this.auctionItem = this.convertFromApiResponseToItem();
    console.log(this.auctionApiResponse);

  }

  public openDialog() {
    this.pendingAuctionItemService.openDialog(this.auctionItem);
  }

  private convertFromApiResponseToItem(): Auction {
    return {
      id: this.auctionApiResponse.id,
      stayDto: this.convertFromApiResponseToItemStay(),
      startPrice: this.auctionApiResponse.startPrice,
      actualPrice: this.auctionApiResponse.actualPrice,
      startDate: this.convertFromEpochToDate(this.auctionApiResponse.startDate),
      endDate: this.convertFromEpochToDate(this.auctionApiResponse.endDate),
      bidHistory: []
    }
  }

  private convertFromApiResponseToItemStay(): Stay {
    return {
      userId: this.auctionApiResponse.stayDto.userId,
      auctionId: this.auctionApiResponse.stayDto.auctionId,
      reservationStartDate: this.convertFromEpochToDate(this.auctionApiResponse.stayDto.reservationStartDate),
      reservationEndDate: this.convertFromEpochToDate(this.auctionApiResponse.stayDto.reservationEndDate),
      roomDto: this.auctionApiResponse.stayDto.roomDto
    }
  }

  private convertFromEpochToDate(dateFromApi: string): String {
    let date = dateFromApi.split("T");
    return date[0];
  }
}
