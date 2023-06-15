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
        addressLine1: ['',{validators: [Validators.required] }],
        addressLine2: [""],
        city: ["",{validators: [Validators.required] }],
        state: ["",{validators: [Validators.required] }],
        country: [""],
        zipcode: [""],
      }),
      guests: this.fb.array([this.addGuestControl()]),
      tnc: new FormControl(false,{validators:[Validators.requiredTrue]}),
    });
    this.getBookingData();
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkindate: '',
      checkoutdate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
      },
      guests: [],
      tnc: false,
    
    });
  }

  //it is used for if the value are comming from api and we want to bind it to form 
  //setValue is for - if we have to pass value for each and every control
  //patchValue is for - it allow to skip some of the controls
  getBookingData(){
    // this.bookingForm.setValue({
    this.bookingForm.patchValue({
      roomId: '2',
      guestEmail: 'test@gmail.com',
      checkindate: new Date('10-Feb-2020'),
      checkoutdate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
      },
      guests: [],
      tnc: false,
    });
  }


  addGuest() {
    this.guests.push(
     this.addGuestControl()
    );
  }

  addGuestControl(){
    return this.fb.group({ guestName: ['',{validators: [Validators.required]}], age: new FormControl(''), })
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