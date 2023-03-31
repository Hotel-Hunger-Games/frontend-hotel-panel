import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auction } from 'src/app/models/auction-item';
import { AuctionPayLoad } from 'src/app/models/auction-payload';
import { Room } from 'src/app/models/room-item-model';

@Injectable({
  providedIn: 'root'
})
export class AuctionCreatorService {
  apiUrl = 'http://localhost:8080/'

  constructor(
    private readonly http: HttpClient,
  ) { }

  public createDummyRooms(): Room[] {
    let availableRoomsList: Room[] = [];

    let firstRoom: Room = {
      name: '1',
      accommodationCapacity: 0,
      bedsSizes: [],
      stays: [],
      images: []
    }

    let secondRoom: Room = {
      name: '2',
      accommodationCapacity: 0,
      bedsSizes: [],
      stays: [],
      images: []
    }
    
    let thirdRoom: Room = {
      name: '3',
      accommodationCapacity: 0,
      bedsSizes: [],
      stays: [],
      images: []
    }

    availableRoomsList.push(firstRoom);
    availableRoomsList.push(secondRoom);
    availableRoomsList.push(thirdRoom);

    return availableRoomsList;
  }

  public postAuction(auction: AuctionPayLoad) {
    return this.http.post<Auction>(this.apiUrl + "api/auction", auction);
  }
}
