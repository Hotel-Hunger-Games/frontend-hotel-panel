import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BidGatewayService } from 'src/app/gateways/bid-gateway.service';
import { Bid } from 'src/app/models/bid-item-model';
@Injectable({
  providedIn: 'root'
})
export class BidsViewService {

  constructor(
    private readonly bidGateway: BidGatewayService,
  ) { }

  public getBidsList(id: number): Observable<Bid[]> {
    return this.bidGateway.getBidsListByAuctionId(id);
  }

  public filterBidsList(auctionId: number, bidsList: Bid[]): Bid[] {
    return bidsList.filter(bid => bid.auctionId == auctionId);
  }

  public sortListByHighestBid( listToSort: Bid[] ): Bid[] {
    var sortedArray: Bid[] = listToSort.sort((n1,n2) => {
    if (n1.price > n2.price) {
        return -1;
    }

    if (n1.price < n2.price) {
        return 1;
    }

    if (n1.bidTime > n2.bidTime) {
      return 1;
    }

    if (n1.bidTime < n2.bidTime) {
        return -1;
    }
    return 0;
    });


    return sortedArray;
  }
}
