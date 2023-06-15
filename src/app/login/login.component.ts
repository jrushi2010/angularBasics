import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string='';
  password:string='';

  constructor(private route:Router){}

  ngOnInit(){}

  login(){
    if(this.email === "admin@gmail.com" && this.password==="Admin"){
      //this.route.navigateByUrl('/rooms/add');
      this.route.navigate(['/rooms','add']);
    }
  }

}
