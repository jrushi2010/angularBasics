import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  bookingForm!: FormGroup;

  get guests() {

    return this.bookingForm.get('guests') as FormArray;

  }

  constructor(private configService: ConfigService, private fb: FormBuilder) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: '2', disabled: true },{validators:[Validators.required]}),
      guestEmail: ["",[Validators.required,Validators.email]],
      checkindate: [""],
      checkoutdate: [""],
      bookingStatus: [""],
      bookingAmount: [""],
      bookingDate: [""],
      mobileNumber: [""],
      guestName: ["",[Validators.required,Validators.minLength(5)]],
      address: this.fb.group({
        addressLine1: [""],
        addressLine2: [""],
        city: [""],
        state: [""],
        country: [""],
        zipcode: [""],
      }),
      guests: this.fb.array([this.addGuestControl()]),
      tnc: new FormControl(false,{validators:[Validators.requiredTrue]}),
    });
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
  }

  addGuest() {
    this.guests.push(
     this.addGuestControl()
    );
  }

  addGuestControl(){
    return this.fb.group({ guestName: [''], age: new FormControl(''), })
  }

  addPassport(){
    this.bookingForm.addControl('passport',new FormControl(''));
  }

  deletePassport(){
    if(this.bookingForm.get('passport')){
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i:number){
    this.guests.removeAt(i);
  }

}


// export class Booking {
//   roomId:string;
//   guestEmail: string;
//   checkindate: Date;
//   checkoutdate: Date;
//   bookingStatus: string;
//   bookingAmount: number;
//   bookingDate: Date;
//   mobileNumber: string;
//   guestName: string;
//   guestAddress: string;
//   guestCity: string;
//   guestState: string;
//   guestCountry: string;
//   guestZipCode: string;
//   guestCount: number;
//   huestList: Guest[];

// }