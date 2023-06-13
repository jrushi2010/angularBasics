import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked{

  //interpolation
  hotelname:string="Season 4";

  //property binding
  numberOfRooms:number = 10;

  //eventbinding
  hideRooms = false;

  title = 'room list';

  @ViewChild(HeaderComponent,{static:true}) headerComponent!:HeaderComponent;

  //child to parent
  selectedRoom!: RoomList;

  rooms:Room = {
    TotalRooms:20,
    availableRooms:10,
    bookedRooms:5
  }

  roomList : RoomList[] = [];

  constructor( private roomservice : RoomsService){}
  ngAfterViewChecked(): void {

  }
  ngAfterViewInit(): void {
    console.log(this.headerComponent);
  }
  ngDoCheck(): void {
    console.log();
  }

 // dont use docheck and onChanges together

  ngOnInit(): void {
    console.log(this.headerComponent);

   this.roomList = this.roomservice.getRooms();
    
  }

  /*

  lifecycle hooks
  ngOnChanges
  ngOnInit
  ngDOCheck
  ngAfterContentInit
  ngAfterContentChecked
  ngAfterViewInit
  ngAfterViewChecked
  ngOnDestory


  */

  //child to parent
  selectRoom(room:RoomList){
    console.log(room);
    this.selectedRoom = room;
  }

  //eventbinding
  toggle(){
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List'
  }

}
