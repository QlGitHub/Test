import { AF } from './../providers/af';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public error: any;
  constructor(public afService : AF, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.afService.loginwithGoogle().then((data) => {
      this.router.navigate(['']);
    });
  }

  loginwithEmail(event, email, password) {
    this.afService.loginwithEmail(email, password).then((data) => {
      this.router.navigate(['']);
    })
    .catch((error) => {
      if (error) {
        this.error = error;
        console.log(this.error);
      }
    });
  }

}
