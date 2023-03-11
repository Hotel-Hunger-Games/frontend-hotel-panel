import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bid } from 'src/app/models/bid-item-model';
import { DialogData } from '../pending-auctions-view-component/pending-auction-item/pending-auction-item.service';

@Component({
  selector: 'app-bids-view',
  templateUrl: './bids-view.component.html',
  styleUrls: ['./bids-view.component.scss']
})
export class BidsViewComponent implements OnInit {
  private bidsList: Bid[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  ngOnInit(): void {
  }

}
