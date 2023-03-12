import { Component, Input, OnInit } from '@angular/core';
import { Bid } from 'src/app/models/bid-item-model';

@Component({
  selector: 'app-bid-item',
  templateUrl: './bid-item.component.html',
  styleUrls: ['./bid-item.component.scss']
})
export class BidItemComponent implements OnInit {
  @Input() bidItem!: Bid;

  constructor() { }

  ngOnInit(): void {
    console.log("Bid info");
  }

}
