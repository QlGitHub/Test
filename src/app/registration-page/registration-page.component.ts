import { Router } from '@angular/router';
import { AF } from './../providers/af';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  public error : any;
  constructor(public afService : AF, private router: Router) { }

  register(event, name, email, password) {
    event.preventDefault();
    this.afService.registerUser(name, email, password).then((user) => {
      this.afService.displayName = name;
      this.afService.saveUserInfoFromForm(user.uid, email, password, name).then(()=>{
        this.router.navigate(['']);
      })
      .catch((error) => {
        this.error = error;
      });
    })
    .catch((error) => {
        this.error = error;
        console.log.apply(this.error);
    });
  }
  ngOnInit() {
  }

}
