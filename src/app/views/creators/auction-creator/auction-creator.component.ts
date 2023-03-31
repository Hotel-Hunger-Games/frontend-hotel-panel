import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuctionPayLoad } from 'src/app/models/auction-payload';
import { Room } from 'src/app/models/room-item-model';
import { StayPayLoad } from 'src/app/models/stay-payload';
import { AuctionCreatorService } from './auction-creator.service';

export interface AuctionCreatorFormData {
  auctionStartDate: FormControl<Date | null>;
  auctionEndDate: FormControl<Date | null>;
  startPrice: FormControl<number | null>;
  roomNumber: FormControl<string | null>;
  reservationStartDate: FormControl<Date | null>;
  reservationEndDate: FormControl<Date | null>;
}

@Component({
  selector: 'app-auction-creator',
  templateUrl: './auction-creator.component.html',
  styleUrls: ['./auction-creator.component.scss']
})
export class AuctionCreatorComponent implements OnInit {
  form!: FormGroup<AuctionCreatorFormData>;
  todayDate!: string;
  availableRoomsList: Room[] = [];

  constructor(
    private readonly auctionCreatorService: AuctionCreatorService,
  ) {
    
   }

  ngOnInit(): void {
    this.todayDate = this.setTodayDate();
    this.form = this.createAuctionCreatorForm();
    this.availableRoomsList = this.auctionCreatorService.createDummyRooms();
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

  private createStay(): StayPayLoad {
    return {
      userId: 1,
      auctionId: 1,
      reservationStartDate: new Date(this.form.controls['reservationStartDate'].value!).getTime() / 1000,
      reservationEndDate: new Date(this.form.controls['reservationEndDate'].value!).getTime() / 1000,
      roomDto: this.getRoomFromList()
    }
  }

  private createNewAuction(): AuctionPayLoad {
    return {
      stayDto: this.createStay(),
      startPrice: this.form.controls['startPrice'].value!,
      actualPrice: 0,
      startDate: new Date(this.form.controls['auctionStartDate'].value!).getTime() / 1000,
      endDate: new Date(this.form.controls['auctionEndDate'].value!).getTime() / 1000,
    };
  }

  private createAuctionCreatorForm(): FormGroup<AuctionCreatorFormData> {
    return new FormGroup<AuctionCreatorFormData>({
      auctionStartDate: new FormControl(),
      auctionEndDate: new FormControl(),
      startPrice: new FormControl(),
      roomNumber: new FormControl('', {
        nonNullable: true,
      }),
      reservationStartDate: new FormControl(),
      reservationEndDate: new FormControl(),
    })
  };

  private getRoomFromList(): Room {
    let roomName: String = this.form.controls['roomNumber'].value!;
    let room = this.availableRoomsList.find(element => 
      element.name == roomName
    );
    return room!;
  }
}
