import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionCreatorComponent } from './views/creators/auction-creator/auction-creator.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PendingAuctionsViewComponentComponent } from './views/pending-auctions-view-component/pending-auctions-view-component.component';
import { RoomCreatorComponent } from './views/room-creator/room-creator.component';
import { HotelManagerPageComponent } from './views/hotel-manager-page/hotel-manager-page.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'creator', component: AuctionCreatorComponent },
  { path: 'auctions/pending', component: PendingAuctionsViewComponentComponent },
  { path: 'room/create', component: RoomCreatorComponent },
  { path: 'hotel/manage', component: HotelManagerPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
