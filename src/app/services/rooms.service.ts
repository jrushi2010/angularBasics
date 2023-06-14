import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms/rooms';
import { HttpClient, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  // roomList : RoomList[] = [
  //   {
  //     roomNumber: 1,
  //     rommType : 'Delux Room',
  //     amenities : 'Air conditioner, free wifi, tv, bathroom, kitchen',
  //     price : 500,
  //     photos : 'data:image/jpeg;base64,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',
  //     checkInTime : new Date('11-Nov-2021'),
  //     checkOutTime : new Date('12-Nov-2021'),
  //   },
  //   {
  //     roomNumber: 2,
  //     rommType : 'Delux Room',
  //     amenities : 'Air conditioner, free wifi, tv, bathroom, kitchen',
  //     price : 500,
  //     photos : 'data:image/jpeg;base64,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',
  //     checkInTime : new Date('11-Nov-2021'),
  //     checkOutTime : new Date('12-Nov-2021'),
  //   },
  //   {
  //     roomNumber: 3,
  //     rommType : 'Delux Room',
  //     amenities : 'Air conditioner, free wifi, tv, bathroom, kitchen',
  //     price : 500,
  //     photos : 'data:image/jpeg;base64,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',
  //     checkInTime : new Date('11-Nov-2021'),
  //     checkOutTime : new Date('12-Nov-2021'),
  //   }
  // ]

  constructor(private  http: HttpClient) { }

  getRooms(){
    //return this.roomList;
    
    //because of proxy config we dont have to give full api path here
    return this.http.get<RoomList[]>('/api/rooms');
    
  }

  addRooms(room:RoomList){
    return this.http.post<RoomList[]>('api/rooms',room);
  }

  editRoom(room:RoomList){
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`,room);
  }

  delete(id:string){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos(){
    const request = new HttpRequest('GET',`https://jsonplaceholder.typicode.com/photos`,{reportProgress: true,
    }
    );
    return this.http.request(request);
  }
}
