import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuctionsGatewayService } from 'src/app/gateways/auctions-gateway.service';
import { Auction } from 'src/app/models/auction-item';

@Injectable({
  providedIn: 'root'
})
export class PendingAuctionsService {
  

  constructor(
    private auctionsGatewayService: AuctionsGatewayService,
    
  ) { }

  public getAllAuctions(): Observable<Auction[]>  {
    return this.auctionsGatewayService.getAllAuctions();
  }
}
