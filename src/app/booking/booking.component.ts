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
      roomId: new FormControl({ value: '2', disabled: true }, { validators: [Validators.required] }),
      guestEmail: ["", { updateOn: 'blur', validators: [Validators.required, Validators.email], },],
      checkindate: [""],
      checkoutdate: [""],
      bookingStatus: [""],
      bookingAmount: [""],
      bookingDate: [""],
      mobileNumber: ["", { updateOn: 'blur' }], //blur is the event call if we move cursor out from the input box
      guestName: ["", [Validators.required, Validators.minLength(5)]],
      address: this.fb.group({
        addressLine1: ['', { validators: [Validators.required] }],
        addressLine2: [""],
        city: ["", { validators: [Validators.required] }],
        state: ["", { validators: [Validators.required] }],
        country: [""],
        zipcode: [""],
      }),
      guests: this.fb.array([this.addGuestControl()]),
      tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
    },{updateOn:'blur',});
    this.getBookingData();

    //it will call for evry key press or every value change so it will give performance issue if we have large form
    this.bookingForm.valueChanges.subscribe((data) => {
      console.log(data);
    })
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
  getBookingData() {
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

  addGuestControl() {
    return this.fb.group({ guestName: ['', { validators: [Validators.required] }], age: new FormControl(''), })
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }

}