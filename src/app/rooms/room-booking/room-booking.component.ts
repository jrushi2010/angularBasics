import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})
export class RoomBookingComponent{

  id:number = 0;

  // id$ = this.activatedRoute.params.pipe(map((params)=>params['id']));

  id$ = this.activatedRoute.paramMap.pipe(map((params)=>params.get('id')));

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    // this.activatedRoute.params.subscribe((params)=>{
    //   //console.log(params);
    //   this.id = params['id']
    // });

    // this.activatedRoute.paramMap.subscribe((params)=>{params.get('id')})
  }
}
