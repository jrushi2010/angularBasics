import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from 'src/app/services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent {

  room : RoomList = {
    roomNumber:'',
    roomType:'',
    amenities: '',
    price: 0,
    photos:'',
    checkinTime:new Date(),
    checkoutTime:new Date(),
    rating:0
  }

  successMessage: string = '';

  constructor(private roomservice:RoomsService){}

  ngOnInit(){

  }

  AddRoom(roomsForm : NgForm){
    this.roomservice.addRooms(this.room).subscribe((data)=>{
     // console.log(data);
     this.successMessage = 'Room added successfully';
      roomsForm.resetForm(
        {
          roomNumber:'',
          roomType:'',
          amenities: '',
          price: 0,
          photos:'',
          checkinTime:new Date(),
          checkoutTime:new Date(),
          rating:0
        }
      );
    })
  }


}
