import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Auction } from 'src/app/models/auction-item-model';
import { BidsViewComponent } from '../../bids-view/bids-view.component';

export interface DialogData {
  auctionId: number;
}

@Injectable({
  providedIn: 'root'
})
export class PendingAuctionItemService {
  constructor(public dialog: MatDialog) { }

  public openDialog(auctionIdReceived: number) {
    this.dialog.open(BidsViewComponent, {
      data: {
        auctionId: auctionIdReceived,
      },
    });
  }
}
