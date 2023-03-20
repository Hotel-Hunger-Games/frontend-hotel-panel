import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auction } from 'src/app/models/auction-item-model';
import { Room } from 'src/app/models/room-item-model';

export interface AuctionCreatorFormData {
  roomNumber: FormControl<string | null>;
  auctionStartDate: FormControl<string | null>;
  auctionEndDate: FormControl<string | null>;
  startPrice: FormControl<number | null>;
}

@Component({
  selector: 'app-auction-creator',
  templateUrl: './auction-creator.component.html',
  styleUrls: ['./auction-creator.component.scss']
})
export class AuctionCreatorComponent implements OnInit {
  form!: FormGroup<AuctionCreatorFormData>;
  availableRoomsList: Room[] = [];
  todayDate!: string;

  constructor() {
    
   }

  ngOnInit(): void {
    this.createDummyRooms();
    this.todayDate = this.setTodayDate();
    this.form = this.createAuctionCreatorForm();
  }

  private setTodayDate(): string {
    let todayDate = new Date();
    const formattedToday = todayDate.getFullYear() + '-0' + todayDate.getMonth() + '-' + todayDate.getDate();
    return formattedToday;
  }

  public submitAuctionCreatorForm(): void {
    console.log(this.form);
  }

  private createNewAuction(): Auction {
    return {
      id: 0,
      stayEntity: '',
      startPrice: 0,
      actualPrice: 0,
      auctionEndDate: '',
      bidHistory: []
    };
  }

  private createAuctionCreatorForm(): FormGroup {
    return new FormGroup<AuctionCreatorFormData>({
      roomNumber: new FormControl('', {
        nonNullable: true,
      }),
      auctionStartDate: new FormControl(this.todayDate),
      auctionEndDate: new FormControl(''),
      startPrice: new FormControl(0),
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
