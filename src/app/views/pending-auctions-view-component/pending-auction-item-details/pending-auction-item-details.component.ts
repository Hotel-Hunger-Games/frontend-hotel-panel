import { Component, Input, OnInit } from '@angular/core';
import { AuctionApiResponse } from 'src/app/models/auction-api-response';
import { Bid } from 'src/app/models/bid-item-model';
import { BidsViewService } from '../../bids-view/bids-view.service';

@Component({
  selector: 'app-pending-auction-item-details',
  templateUrl: './pending-auction-item-details.component.html',
  styleUrls: ['./pending-auction-item-details.component.scss']
})
export class PendingAuctionItemDetailsComponent implements OnInit {
  @Input() auction!: AuctionApiResponse;
  startDateTime!: String;
  endDateTime!: String;
  topBidder!: Bid;
  timeUntilAuctionEnd!: String;

  constructor(
    private readonly bidsViewService: BidsViewService,
  ) { }

  ngOnInit(): void {
    this.getTopBidder();
    this.startDateTime = this.formatTime(this.auction.startDate);
    this.endDateTime = this.formatTime(this.auction.endDate);

    setInterval(() => {this.timeUntilAuctionEnd = this.setTimeUntilAcutionEnds()}, 1000);
  }

  private getTopBidder() {
    this.topBidder = this.bidsViewService.sortListByHighestBid(this.getBidsList())[0];
  }

  private getBidsList(): Bid[] {
    let recList!: Bid[];
    this.bidsViewService.getBidsList(this.auction.id).subscribe((list) => {
      recList = list;
    }) 
    return recList;
  }

  private setTimeUntilAcutionEnds(): String {
    let start = Date.now();
    let end = Date.parse(this.auction.endDate);
    let diff = end - start;

    let obj = this.dhm(diff);

    if(obj == null) {
      return "Auction ended"
    } else {
      let ans = obj.days + " days "  + obj.hours + " hours " + obj.minutes + " minutes " + obj.sec + " seconds ";
      return ans;
    }
  }

  private dhm (ms: number) {
    const days = Math.floor(ms / (24*60*60*1000));
    const daysms = ms % (24*60*60*1000);
    const hours = Math.floor(daysms / (60*60*1000));
    const hoursms = ms % (60*60*1000);
    const minutes = Math.floor(hoursms / (60*1000));
    const minutesms = ms % (60*1000);
    const sec = Math.floor(minutesms / 1000);

    if(ms < 0) {
      return null;
    } else {
      return { days: days, hours: hours, minutes: minutes, sec: sec };
    }
  }

  // i know its mess but im just making it work ASAP, SORRY !! 
  private formatTime(receivedTime: String): String {
    console.log(receivedTime);
    receivedTime = receivedTime.replace("T", " ");
    receivedTime = receivedTime.replace("Z", "");

    let endTimeArr = receivedTime.split(":");
    let productOfDevilMethod = this.endDateTime = endTimeArr[0] + ":" + endTimeArr[1];

    return productOfDevilMethod;
  }
}
