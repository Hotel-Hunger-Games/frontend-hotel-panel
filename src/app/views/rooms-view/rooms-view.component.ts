import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room-item-model';

@Component({
  selector: 'app-rooms-view',
  templateUrl: './rooms-view.component.html',
  styleUrls: ['./rooms-view.component.scss']
})
export class RoomsViewComponent implements OnInit {
  roomsList: Room[] = [];

  constructor() { }

  ngOnInit(): void {
    this.roomsList = this.createSomeRooms();
  }

  private createSomeRooms(): Room[] {
    let roomsList: Room[] = [];

    let room1: Room = {
      id: 0,
      name: '',
      accommodationCapacity: 0,
      bedsSizes: 0,
      stays: '',
      images: ''
    }

    let room2: Room = {
      id: 1,
      name: '',
      accommodationCapacity: 0,
      bedsSizes: 0,
      stays: '',
      images: ''
    }

    let room3: Room = {
      id: 2,
      name: '',
      accommodationCapacity: 0,
      bedsSizes: 0,
      stays: '',
      images: ''
    }

    let room4: Room = {
      id: 3,
      name: '',
      accommodationCapacity: 0,
      bedsSizes: 0,
      stays: '',
      images: ''
    }

  roomsList.push(room1);
  roomsList.push(room2);
  roomsList.push(room3);
  roomsList.push(room4);

  return roomsList;
  }
}
