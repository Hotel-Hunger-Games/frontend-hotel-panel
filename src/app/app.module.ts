import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PendingAuctionsViewComponentComponent } from './views/pending-auctions-view-component/pending-auctions-view-component.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PendingAuctionItemComponent } from './views/pending-auctions-view-component/pending-auction-item/pending-auction-item.component';
import { PendingAuctionItemDetailsComponent } from './views/pending-auctions-view-component/pending-auction-item-details/pending-auction-item-details.component';
import { AuctionCreatorComponent } from './views/auction-creator/auction-creator.component';
import { PendingAuctionsEndingSoonComponent } from './views/pending-auctions-view-component/pending-auctions-ending-soon/pending-auctions-ending-soon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BidsViewComponent } from './views/bids-view/bids-view.component';
import { BidItemComponent } from './views/bids-view/bid-item/bid-item.component';
import { AngularMaterialModule } from 'src/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PendingAuctionsViewComponentComponent,
    DashboardComponent,
    PendingAuctionItemComponent,
    PendingAuctionItemDetailsComponent,
    AuctionCreatorComponent,
    PendingAuctionsEndingSoonComponent,
    BidsViewComponent,
    BidItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
