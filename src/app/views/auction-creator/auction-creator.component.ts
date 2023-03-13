import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Room } from 'src/app/models/room-item-model';

@Component({
  selector: 'app-auction-creator',
  templateUrl: './auction-creator.component.html',
  styleUrls: ['./auction-creator.component.scss']
})
export class AuctionCreatorComponent implements OnInit {
  auctionCreatorForm: FormGroup;
  availableRoomsList: Room[] = [];

  constructor() {
    this.auctionCreatorForm = this.createAuctionCreatorForm();
   }

  ngOnInit(): void {
    this.createDummyRooms();
  }

  public submitAuctionCreatorForm(): void {
    
  }

  private createAuctionCreatorForm(): FormGroup {
    return new FormGroup({
      availableRoomsList: new FormControl(''),
      auctionStartDate: new FormControl(''),
      auctionEndDate: new FormControl(''),
      startPrice: new FormControl(''),
    })
  };

  private createDummyRooms() {
    let firstRoom: Room = {
      id: 1,
      name: '1',
      accommodationCapacity: 0,
      bedsSizes: 0,
      stays: '',
      images: ''
    }

    let secondRoom: Room = {
      id: 2,
      name: '2',
      accommodationCapacity: 0,
      bedsSizes: 0,
      stays: '',
      images: ''
    }
    
    let thirdRoom: Room = {
      id: 3,
      name: '3',
      accommodationCapacity: 0,
      bedsSizes: 0,
      stays: '',
      images: ''
    }

    this.availableRoomsList.push(firstRoom);
    this.availableRoomsList.push(secondRoom);
    this.availableRoomsList.push(thirdRoom);
  }
}
