import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bid } from 'src/app/models/bid-item-model';
@Injectable({
  providedIn: 'root'
})
export class BidsViewService {

  constructor() { }

  public getBidsList(): Observable<Bid[]> {
    return of(this.createBidsList());
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

  private createBidsList(): Bid[] {
    let bidsList: Bid[] = [];

    const bidFour: Bid = {
      id: 4,
      email: 'someuserTwo@gmail.com',
      price: 700,
      bidTime: '',
      auctionId: 64,
    }

    const bidOne: Bid = {
      id: 1,
      email: 'someuserOne@gmail.com',
      price: 400,
      bidTime: '',
      auctionId: 32,
    }

    const bidTwo: Bid = {
      id: 2,
      email: 'someuserTwo@gmail.com',
      price: 200,
      bidTime: '',
      auctionId: 64,
    }

    const bidThree: Bid = {
      id: 3,
      email: 'someuserThree@gmail.com',
      price: 300,
      bidTime: '',
      auctionId: 32,
    }

    bidsList.push(bidFour);
    bidsList.push(bidOne);
    bidsList.push(bidTwo);
    bidsList.push(bidThree);

    return bidsList;
  }
}
