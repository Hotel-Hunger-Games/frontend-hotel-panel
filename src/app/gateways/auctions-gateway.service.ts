import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuctionApiResponse } from '../models/auction-api-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuctionsGatewayService {
  apiUrl = '/api/auction'

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getAuctions(): Observable<AuctionApiResponse[]> {
    return this.http.get<AuctionApiResponse[]>(this.apiUrl);
  }
}
