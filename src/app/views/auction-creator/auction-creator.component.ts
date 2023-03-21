import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auction } from 'src/app/models/auction-item';
import { AuctionPayLoad } from 'src/app/models/auction-payload';
import { Bid } from 'src/app/models/bid-item-model';
import { Room } from 'src/app/models/room-item-model';
import { Stay } from 'src/app/models/stay-item-model';
import { AuctionCreatorService } from './auction-creator.service';

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

  constructor(
    private readonly auctionCreatorService: AuctionCreatorService,
  ) {
    
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
    const auctionToSubmit: AuctionPayLoad = this.createNewAuction();

    this.auctionCreatorService.postAuction(auctionToSubmit).subscribe((apiResponse) => {
      console.log(apiResponse);
    })
  }

  private createNewAuction(): AuctionPayLoad {
    const roomOne: Room = {
      name: 'Room 399',
      accommodationCapacity: 2,
      bedsSizes: [],
      stays: [],
      images: []
    }
    
    const stay: Stay = {
      userId: 7,
      auctionId: 3,
      reservationStartDate: '',
      reservationEndDate: '',
      roomDto: roomOne
    }

    return {
      stayDto: stay,
      startPrice: 100,
      actualPrice: 0,
      startDate: 1679428360,
      endDate: 1680119560,
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
}
