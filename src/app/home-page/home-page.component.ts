import { FirebaseListObservable } from 'angularfire2';
import { AF } from './../providers/af';
import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

 // this get called after every check of the components' view, which will trigger the
 // scrollToBottom function
  ngAfterViewChecked(){
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) {
      console.log('Scroll to bottom failed');
    }
  }
  
  public newMessage: string;
  public messages: FirebaseListObservable<any>;
  constructor(public afService: AF) {
    this.messages = this.afService.messages;
   }
  
  ngOnInit() {
  }

  sendMessage() {
    if (this.newMessage) {
        this.afService.sendMessage(this.newMessage);
        this.newMessage = "";
    }
  }

  isYou(email): boolean{
    if (email == this.afService.email) {
      return true;
    } else {
      return false;
    }
  }

  isMe(email) {
    if(email == this.afService.email) {
      return false;
    } else {
      return true;
    }
  }

}
