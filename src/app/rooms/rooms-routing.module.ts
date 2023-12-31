import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RoomGuard } from './guards/room.guard';
import { BookingComponent } from '../booking/booking.component';

const routes: Routes = [
  {
    path: '', component: RoomsComponent, 
    canActivateChild: [RoomGuard],
    children: [
      { path: 'add', component: RoomAddComponent },
       //{ path: ':id', component: RoomBookingComponent },
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
