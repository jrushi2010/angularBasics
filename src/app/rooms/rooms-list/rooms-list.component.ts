import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnChanges{

  //parent to child
  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Input() price: number = 0;

  //child to parent 
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnint(){}

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }

}
