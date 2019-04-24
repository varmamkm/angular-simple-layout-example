import { Component, OnInit } from '@angular/core';
import { RouterModule , Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string="";
  constructor(private routes: Router) { }

  ngOnInit() {
  }

  Submit()
  {
    localStorage.setItem("role","admin");
    this.msg = "Authguard is set.. please click on dashboard now."
  }
  
}