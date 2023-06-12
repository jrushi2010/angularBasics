export interface Room {
    TotalRooms:number;
    availableRooms:number;
    bookedRooms:number;
}

export interface RoomList {
    roomNumber:number;
    rommType : string;
    amenities : string;
    price : number;
    photos : string;
    checkInTime : Date;
    checkOutTime : Date;
}