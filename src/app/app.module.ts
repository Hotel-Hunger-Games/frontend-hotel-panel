import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PendingAuctionsViewComponentComponent } from './views/pending-auctions-view-component/pending-auctions-view-component.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PendingAuctionItemComponent } from './views/pending-auctions-view-component/pending-auction-item/pending-auction-item.component';
import { PendingAuctionItemDetailsComponent } from './views/pending-auctions-view-component/pending-auction-item-details/pending-auction-item-details.component';
import { AuctionCreatorComponent } from './views/creators/auction-creator/auction-creator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BidsViewComponent } from './views/bids-view/bids-view.component';
import { BidItemComponent } from './views/bids-view/bid-item/bid-item.component';
import { AngularMaterialModule } from 'src/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PendingAuctionsViewComponentComponent,
    DashboardComponent,
    PendingAuctionItemComponent,
    PendingAuctionItemDetailsComponent,
    AuctionCreatorComponent,
    BidsViewComponent,
    BidItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    MatRippleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTabsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
