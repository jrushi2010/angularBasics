import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { HeaderModule } from '../header/header.module';
import { RouteConfigToken } from '../services/routeConfig.service';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [ RoomsComponent,
    RoomsListComponent, RoomBookingComponent,
    RoomAddComponent,
    FilterPipe,],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  providers:[
    {
      provide: RouteConfigToken,
      useValue: {title:'Room'},
    }
  ]
})
export class RoomsModule { }
