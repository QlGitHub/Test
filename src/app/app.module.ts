import { AF } from './providers/af';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule, Routes} from '@angular/router';

export const firebaseConfig = {
    apiKey: "AIzaSyDufxVf5elTShag-v7-mIg3whBAaAV96j4",
    authDomain: "angular4example.firebaseapp.com",
    databaseURL: "https://angular4example.firebaseio.com",
    projectId: "angular4example",
    storageBucket: "angular4example.appspot.com",
    messagingSenderId: "1005246495311"
};

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component:RegistrationPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }


