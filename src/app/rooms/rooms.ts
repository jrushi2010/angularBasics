export interface Room {
    TotalRooms:number;
    availableRooms:number;
    bookedRooms:number;
}

export interface RoomList {
    //roomId:number;
    roomNumber:string;
    roomType : string;
    amenities : string;
    price : number;
    photos : string;
    checkinTime : Date;
    checkoutTime : Date;
    rating: number;
}