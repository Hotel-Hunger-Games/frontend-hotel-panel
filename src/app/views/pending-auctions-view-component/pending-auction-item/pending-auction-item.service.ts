import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Auction } from 'src/app/models/auction-item';
import { BidsViewComponent } from '../../bids-view/bids-view.component';

export interface DialogData {
  auction: Auction;
}

@Injectable({
  providedIn: 'root'
})
export class PendingAuctionItemService {
  apiUrl = 'http://localhost:8080/'

  constructor(
    public dialog: MatDialog,
  ) { 

  }

  public openDialog(auction: Auction) {
    this.dialog.open(BidsViewComponent, {
      data: {
        auction: auction,
      },
    });
  }
}
