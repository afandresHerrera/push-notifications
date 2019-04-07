import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ToastrService } from 'ngx-toastr';


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

  constructor(private notification: FlashMessagesService, private pushMessage: ToastrService) {

  }
  ngOnInit() {
    // this.pushMessage.success('Hello world!', 'Toastr fun!');
    // this.pushMessage.error('Hello world!', 'toast-info');
    // this.pushMessage.warning('Hello world!', 'Toastr fun!');
    // this.pushMessage.info('Hello world!', 'Toastr fun!');
    // this.pushMessage.show('Hello world!', 'Toastr fun!');
  }

  success() {
    this.pushMessage.success('Hello world!', 'Toastr fun!');

  }
  error() {
    this.pushMessage.error('Hello world!', 'toast-info');

  }
  warning() {
    this.pushMessage.warning('Hello world!', 'Toastr fun!');

  }
  info() {
    this.pushMessage.info('Hello world!', 'Toastr fun!');

  }
  show() {
    this.pushMessage.show('Hello world!', 'Toastr fun!')
      .onTap
      .subscribe(() => location.reload());

  }


  validate() {
    var caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (caracteres.test(this.email)) {
      if (this.password != '' && this.repeatPassword != '') {
        if (this.password == this.repeatPassword) {
          this.notification.show('Te has registrado exitosamente !!!', { cssClass: 'alert-success', timeout: 3000 });

          this.pushMessage.success('bienvenido a TELEPERFORMANCE', 'exito!');
          setTimeout(() => {
            this.viewLogin = true
          }, 1000);
        } else {
          this.pushMessage.info('tus contraseñas no coinciden', 'Ups!!');
          this.notification.show('Las contraseñas no coinciden intente nuevamente', { cssClass: 'alert-danger', timeout: 3000 });
        }

      } else {
        this.pushMessage.info('completa todos los campos', 'Ups!!');
        this.notification.show('Por favor diligencie todos los campos', { cssClass: 'alert-danger', timeout: 3000 });
      }
    } else {
      this.pushMessage.info('Algo salio mal', 'Ups!!');
      this.notification.show('Por favor ingrese un correo valido', { cssClass: 'alert-danger', timeout: 3000 });
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
          // this.notification.show('Te damos la bienvenida a TELEPERFORMANCE !!!', { cssClass: 'alert-success', timeout: 3000 });
          this.pushMessage.success('bienvenido a TELEPERFORMANCE', 'exito!');

          setTimeout(() => {
            this.viewLogin = false
            this.viewHome = true
          }, 1000);
        } else {
          this.pushMessage.info('Algo salio mal', 'Ups!!');
          this.notification.show('Usuario o contraseña invalidos por favor intente nuevamente. ', { cssClass: 'alert-danger', timeout: 3000 });
        }

      } else {
        this.pushMessage.info('Algo salio mal', 'Ups!!');
        this.notification.show('Por favor diligencie todos los campos', { cssClass: 'alert-danger', timeout: 3000 });
      }
    } else {
      this.pushMessage.info('Algo salio mal', 'Ups!!');
      this.notification.show('Por favor ingrese un correo valido', { cssClass: 'alert-danger', timeout: 3000 });
    }
  }
}
