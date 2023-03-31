import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bid } from '../models/bid-item-model';

@Injectable({
  providedIn: 'root'
})
export class BidGatewayService {
  apiUrl = 'http://localhost:8080/'

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getBidsListByAuctionId(auctionId: number): Observable<Bid[]> { 
    return this.http.get<Bid[]>(this.apiUrl + "api/" + auctionId);
  }
}
