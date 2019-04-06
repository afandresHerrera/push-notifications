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
  public viewLogin: boolean = false
  public viewHome: boolean = false
  public emailLogin = ""
  public passwordLogin = ""

  constructor(private notification: FlashMessagesService) {

  }
  ngOnInit() {
    // this.notification.show('We are in about component!', { cssClass: 'alert-danger', timeout: 4000 });
    // this.notification.grayOut(true);
    // this.notification.grayOut(false);
  }
  validate() {
    var caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (caracteres.test(this.email)) {
      if (this.password != '' && this.repeatPassword != '') {
        if (this.password == this.repeatPassword) {
          this.notification.show('Te has registrado exitosamente !!!', { cssClass: 'alert-success', timeout: 4000 });
          setTimeout(() => {
            this.viewLogin = true
          }, 1000);
        } else {
          this.notification.show('Las contraseñas no coinciden intente nuevamente', { cssClass: 'alert-danger', timeout: 4000 });
        }

      } else {
        this.notification.show('Por favor diligencie todos los campos', { cssClass: 'alert-danger', timeout: 4000 });
      }
    } else {
      this.notification.show('Por favor ingrese un correo valido', { cssClass: 'alert-danger', timeout: 4000 });
    }
    console.log(this.email);
    console.log(this.password);
    console.log(this.repeatPassword);

  }
  login() {
    var caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (caracteres.test(this.emailLogin)) {
      if (this.password != '') {
        if (this.emailLogin == this.email && this.passwordLogin == this.password) {
          this.notification.show('Te damos la bienvenida a TELEPERFORMANCE !!!', { cssClass: 'alert-success', timeout: 4000 });
          setTimeout(() => {
            this.viewLogin = false
            this.viewHome = true
          }, 1000);
        } else {
          this.notification.show('Usuario o contraseña invalidos por favor intente nuevamente. ', { cssClass: 'alert-danger', timeout: 4000 });
        }

      } else {
        this.notification.show('Por favor diligencie todos los campos', { cssClass: 'alert-danger', timeout: 4000 });
      }
    } else {
      this.notification.show('Por favor ingrese un correo valido', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}
