import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'push-notifications';
  public email = ""
  public password: string = ""
  public repeatPassword: string = ""

  constructor(private notification: FlashMessagesService) {

  }
  ngOnInit() {
    this.notification.show('We are in about component!', { cssClass: 'alert-danger', timeout: 4000 });
    // this.notification.grayOut(true);
    // this.notification.grayOut(false);
  }
  validate() {
    this.notification.show('Te has registrado exitosamente !!!', { cssClass: 'alert-success', timeout: 4000 });
    console.log(this.email);
    console.log(this.password);
    console.log(this.repeatPassword);

  }
}
