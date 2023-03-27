import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auction } from 'src/app/models/auction-item';
import { Room } from 'src/app/models/room-item-model';

@Injectable({
  providedIn: 'root'
})
export class RoomCreatorService {
  apiUrl = 'http://localhost:8080/'

  constructor(
    private readonly http: HttpClient,
  ) { 

  }

  public postRoom(room: Room) {
    return this.http.post<Auction>(this.apiUrl + "api/room/create", room);
  }
}
