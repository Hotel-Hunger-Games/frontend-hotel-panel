import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Room } from 'src/app/models/room-item-model';

export interface StayCreatorFormData {
  roomNumber: FormControl<string | null>;
  auctionStartDate: FormControl<Date | null>;
  auctionEndDate: FormControl<Date | null>;
}

@Component({
  selector: 'app-reservation-creator',
  templateUrl: './reservation-creator.component.html',
  styleUrls: ['./reservation-creator.component.scss']
})
export class ReservationCreatorComponent implements OnInit {
  stayForm!: FormGroup<StayCreatorFormData>;
  availableRoomsList: Room[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createDummyRooms();
    this.stayForm = this.createStayCreatorForm();
  }

  private createStayCreatorForm(): FormGroup<StayCreatorFormData> {
    return new FormGroup<StayCreatorFormData>({
      roomNumber: new FormControl('', {
        nonNullable: true,
      }),
      auctionStartDate: new FormControl(),
      auctionEndDate: new FormControl(),
    })
  };

  private createDummyRooms() {
    let firstRoom: Room = {
      // id: 1,
      name: '1',
      accommodationCapacity: 0,
      bedsSizes: [],
      stays: [],
      images: []
    }

    let secondRoom: Room = {
      // id: 2,
      name: '2',
      accommodationCapacity: 0,
      bedsSizes: [],
      stays: [],
      images: []
    }
    
    let thirdRoom: Room = {
      // id: 3,
      name: '3',
      accommodationCapacity: 0,
      bedsSizes: [],
      stays: [],
      images: []
    }

    this.availableRoomsList.push(firstRoom);
    this.availableRoomsList.push(secondRoom);
    this.availableRoomsList.push(thirdRoom);
  }

  public navigateToAuctionCreator(): void {
  }
}
