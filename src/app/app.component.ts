import { Router } from '@angular/router';
import { AF } from './providers/af';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;
  public displayName : string;

  constructor(public afService: AF, private router: Router) {
    //debugger;
    this.afService.af.auth.subscribe((auth) => {
      if (auth == null) {
        console.log("Not logged in");
        this.router.navigate(['login']);
        this.isLoggedIn = false;
      } else {
        if (auth.google) {
          this.afService.displayName = auth.google.displayName;
          this.afService.email = auth.google.email;
        } else {
          this.afService.displayName = auth.auth.displayName;
          this.afService.email = auth.auth.email;
        }
        this.isLoggedIn = true;
        this.displayName = this.afService.displayName;
        this.router.navigate(['']);
      }
    });
  }

  logout() {
    this.afService.logout();
  }

}


