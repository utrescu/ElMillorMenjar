import { Component } from '@angular/core';
import {prompt, alert} from "ui/dialogs";

import { UserService } from '../../services/user.service';
import { User } from './../../shared/user';
import { RouterExtensions } from 'nativescript-angular/router';


@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css']
})
export class LoginComponent {

  usuari: User
  isLoggingIn = true;

  constructor(
    private userService: UserService,
    private routerExtensions: RouterExtensions,
  ) {
    this.usuari = new User();
    this.usuari.email = "utrescu@gmail.com";
    this.usuari.password = "patata";
  }

  submit() {
    if (this.isLoggingIn) {
        this.login();
      } else {
        this.signUp();
      }
  }

  login() {
    this.userService.login(this.usuari)
      .then(() => {
        this.isLoggingIn = false;
        this.routerExtensions.navigate(["/participants"], { clearHistory: true } );

      })
      .catch((message:any) => {
        this.isLoggingIn = false;
      })

  }

  signUp() {
    this.userService.register(this.usuari)
      .then(() => {
        this.isLoggingIn = false;
        alert({
            title: "Usuari creat",
            message: "Ja pots entrar en el sistema",
            okButtonText: "Ok!"
        })
        this.toggleDisplay();
      })
      .catch((message:any) => {
        alert(message);
        this.isLoggingIn = false;
      });
  }


  forgotPassword() {
    prompt({
      title: "Contrasenya oblidada",
      message: "Entra l'adreça de correu electrònic que vas fer servir per registrar-te per resetar la contrasenya.",
      defaultText: "",
      okButtonText: "Ok",
      cancelButtonText: "Cancel·lar"
    }).then((data) => {
      if (data.result) {
        this.userService.resetPassword(data.text.trim())
          .then((result:any) => {
            if(result){
              alert(result);
            }
         });
      }
    });
 }


  toggleDisplay() {
     this.isLoggingIn = !this.isLoggingIn;
  }
}