import { Component, Input, OnInit } from '@angular/core';
import { Bid } from 'src/app/models/bid-item-model';

@Component({
  selector: 'app-bids-view',
  templateUrl: './bids-view.component.html',
  styleUrls: ['./bids-view.component.scss']
})
export class BidsViewComponent implements OnInit {
  @Input() bidsList!: Bid[];

  constructor() { }

  ngOnInit(): void {
  }

}
