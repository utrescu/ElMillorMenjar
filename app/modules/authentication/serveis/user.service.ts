import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromPromise";

import { BackendService } from "../../core/serveis/backend.service";

import { User } from "../models/user";

import firebase = require("nativescript-plugin-firebase");

@Injectable()
export class UserService {
  constructor() {
    // public http: HttpClient) {
  }

  // private createCapsalera() {
  //     let headers = new HttpHeaders();
  //     headers.append("Content-Type", "application/json");
  //     return headers;
  // }

  register(user: User) {
    return firebase
      .createUser({
        email: user.email,
        password: user.password
      })
      .then(
        result => {
          return result;
        },
        error => {
          alert(error);
        }
      );
  }

  login(user: User) {
    return firebase
      .login({
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: user.email,
          password: user.password
        }
      })
      .then(
        result => {
          BackendService.token = result.uid;
          return JSON.stringify(result);
        },
        error => {
          alert("Usuari o contrasenya incorrectes");
          return null;
        }
      );
  }

  logout() {
    BackendService.token = "";
    firebase.logout();
  }

  resetPassword(email) {
    return firebase
      .resetPassword({
        email: email
      })
      .then(
        (result: any) => {
          alert(JSON.stringify(result));
        },
        (errorMessage: any) => {
          alert(errorMessage);
        }
      ); // .catch(this.handleErrors);
  }
}
