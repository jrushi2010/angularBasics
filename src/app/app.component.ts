import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hotelinventory';

  // loginTypes = 'admin';

  @ViewChild('name',{static:true}) name!: ElementRef;

  constructor(private configService: ConfigService){}

  ngOnInit(){
    this.name.nativeElement.innerText = "Hilton hotel";
  }
}
