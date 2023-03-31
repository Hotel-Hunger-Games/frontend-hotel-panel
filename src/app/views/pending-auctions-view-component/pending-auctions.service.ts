import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuctionsGatewayService } from 'src/app/gateways/auctions-gateway.service';
import { AuctionApiResponse } from 'src/app/models/auction-api-response';

@Injectable({
  providedIn: 'root'
})
export class PendingAuctionsService {
  

  constructor(
    private auctionsGatewayService: AuctionsGatewayService,
  ) { }

  public getAllAuctions(): Observable<AuctionApiResponse[]>  {
    return this.auctionsGatewayService.getAllAuctions();
  }
}
