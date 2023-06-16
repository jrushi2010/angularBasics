import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { RoomsService } from '../services/rooms.service';
import { ConfigService } from '../services/config.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouteConfigToken } from '../services/routeConfig.service';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule,FormsModule,ReactiveFormsModule],
      declarations: [ RoomsComponent ],
      providers:[RoomsService,ConfigService,{
        provide: RouteConfigToken,
        useValue: {title: 'rooms'}
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle',()=>{
    component.hideRooms = false;
    component.toggle();
    expect(component.hideRooms).toBe(true);
  })
});
