import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auction } from 'src/app/models/auction-item';
import { AuctionPayLoad } from 'src/app/models/auction-payload';

@Injectable({
  providedIn: 'root'
})
export class AuctionCreatorService {
  apiUrl = 'http://localhost:8080/'

  constructor(
    private readonly http: HttpClient,
  ) { 

  }

  public postAuction(auction: AuctionPayLoad) {
    return this.http.post<Auction>(this.apiUrl + "api/auction", auction);
  }
}
