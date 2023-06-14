import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { RoomAddComponent } from './rooms/room-add/room-add.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',redirectTo:'/login',pathMatch:'full'},
  {path:'employee',component:EmployeeComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'rooms/add',component:RoomAddComponent},
  {path:'rooms/:id',component:RoomBookingComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
