import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuctionsGatewayService } from 'src/app/gateways/auctions-gateway.service';
import { Auction } from 'src/app/models/auction-item-model';

@Injectable({
  providedIn: 'root'
})
export class PendingAuctionsService {

  constructor(
    private auctionsGatewayService: AuctionsGatewayService
  ) { }

  public getAuctions(): void {
    let auctionsList: Auction[];
    this.auctionsGatewayService.getAuctions().subscribe((data) => {
      console.log(data);
    });
  }
}
