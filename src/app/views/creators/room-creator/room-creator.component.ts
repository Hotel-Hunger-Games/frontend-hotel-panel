import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Room } from 'src/app/models/room-item-model';
import { RoomCreatorService } from './room-creator.service';


export interface RoomCreatorFormData {
  roomNumber: FormControl<string>;
  acommodationCapacity: FormControl<number>;
  bedsSizes: FormControl<number[] | null>;
}

@Component({
  selector: 'app-room-creator',
  templateUrl: './room-creator.component.html',
  styleUrls: ['./room-creator.component.scss']
})

export class RoomCreatorComponent implements OnInit {
  newRoomForm!: FormGroup<RoomCreatorFormData>;

  constructor(
    private readonly roomCreatorService: RoomCreatorService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.newRoomForm = this.createRoomCreatorForm();
  }

  private createRoomCreatorForm(): FormGroup<RoomCreatorFormData> {
    return new FormGroup<RoomCreatorFormData>({
      roomNumber: new FormControl(),
      acommodationCapacity: new FormControl(),
      bedsSizes: new FormControl(),
    })
  }

  public createNewRoom(): void {
    let room: Room = {
      name: this.newRoomForm.controls.roomNumber.value,
      accommodationCapacity: this.newRoomForm.controls.acommodationCapacity.value,
      bedsSizes: [],
      stays: [],
      images: []
    }

    this.openSnackBar("Room created successfully!", "Close") 
    this.roomCreatorService.postRoom(room);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

