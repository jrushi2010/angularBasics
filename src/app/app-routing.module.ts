import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';

const routes: Routes = [
  {path: '',redirectTo:'/rooms',pathMatch:'full'},
  {path:'employee',component:EmployeeComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'rooms/:id',component:RoomBookingComponent},
  {path:'**',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
