import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class AF {
  public messages : FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email : string;

  constructor(public af: AngularFire) {
      this.messages = this.af.database.list('messages');
  }
  
  loginwithGoogle() {
    return this.af.auth.login({
        provider: AuthProviders.Google,
        method: AuthMethods.Popup
    });
  }
  
  loginwithEmail(email, password) {
      return this.af.auth.login({
        email: email,
        password: password
      }, 
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }
      );
  }

  registerUser(name, email, password) {
      this.displayName = name;
      return this.af.auth.createUser({
          email : email,
          password: password
      });
  }

  saveUserInfoFromForm(uid, email, password, name) {
      return this.af.database.object('registeredUsers/' + uid).set({
            email: email,
            password: password,
            displayName: name
      });  
    }

  logout() {
      return this.af.auth.logout();
  }

  sendMessage(text) {
    var message = {
        message: text,
        displayName: this.displayName,
        email: this.email,
        timestamp: Date.now() 
    };
    this.messages.push(message);
  }

}


