import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from './services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hotelinventory';

  // loginTypes = 'admin';

  @ViewChild('name',{static:true}) name!: ElementRef;

  constructor(private configService: ConfigService, private router:Router){}

  ngOnInit(){
    this.name.nativeElement.innerText = "Hilton hotel";

    // this.router.events.subscribe((event)=>
    // console.log(event));
  }
}
