import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from '../services/rooms.service';
import { HttpEventType } from '@angular/common/http';
import { Subject, Subscription, catchError, map, of } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

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

  totalBytes = 0;

  subscription! : Subscription;

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomservice.getRooms$.pipe(
    catchError((error)=>{
      //console.log(error);
      this.error$.next(error.message);
      return of([]);
    })
  );

  priceFilter = new FormControl();

  roomsCount$ = this.roomservice.getRooms$.pipe(
    map((rooms)=>rooms.length)
  )

  @ViewChild(HeaderComponent,{static:true}) headerComponent!:HeaderComponent;

  //child to parent
  selectedRoom!: RoomList;

  rooms:Room = {
    TotalRooms:20,
    availableRooms:10,
    bookedRooms:5
  }

  roomList : RoomList[] = [];

  constructor( private roomservice : RoomsService, private configService: ConfigService){}
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

    this.roomservice.getPhotos().subscribe((event)=>{
      //console.log(event);
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes  = event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    })

    console.log(this.headerComponent);

   //this.roomList = this.roomservice.getRooms();

    this.subscription=  this.roomservice.getRooms().subscribe(rooms => {
      this.roomList = rooms;
    })
    
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

  addRoom(){
    const room:RoomList = {
      roomNumber:'',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free wifi, TV, Bathroom',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    };

    this.roomservice.addRooms(room).subscribe((data)=>{
      this.roomList = data;
    })
  }

  editRoom(){
    const room:RoomList = {
      roomNumber:'3',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free wifi, TV, Bathroom',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    };

    this.roomservice.editRoom(room).subscribe((data)=>{
      this.roomList = data;
    })
  }

  deleteRoom(){
    this.roomservice.delete('3').subscribe((data)=>{
      this.roomList = data;
    })
  }

  //eventbinding
  toggle(){
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List'
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
