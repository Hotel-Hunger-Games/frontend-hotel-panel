import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionCreatorComponent } from './views/auction-creator/auction-creator.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PendingAuctionsViewComponentComponent } from './views/pending-auctions-view-component/pending-auctions-view-component.component';
import { RoomsViewComponent } from './views/rooms-view/rooms-view.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'creator', component: AuctionCreatorComponent },
  { path: 'auctions/pending', component: PendingAuctionsViewComponentComponent },
  { path: 'room/all', component: RoomsViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
