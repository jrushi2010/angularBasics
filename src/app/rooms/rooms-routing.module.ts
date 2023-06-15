import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';

const routes: Routes = [
  {path:'rooms',component:RoomsComponent},
  {path:'rooms/add',component:RoomAddComponent},
  {path:'rooms/:id',component:RoomBookingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
