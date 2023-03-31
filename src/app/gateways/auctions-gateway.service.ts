import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuctionApiResponse } from '../models/auction-api-response';
import { HttpClient } from '@angular/common/http';
import { Auction } from '../models/auction-item';

@Injectable({
  providedIn: 'root'
})
export class AuctionsGatewayService {
  apiUrl = 'http://localhost:8080/';

  constructor(
    private readonly http: HttpClient,
  ) { }


  public getAllAuctions(): Observable<AuctionApiResponse[]> {
    return this.http.get<AuctionApiResponse[]>(this.apiUrl + "api/auction");
  }
}
