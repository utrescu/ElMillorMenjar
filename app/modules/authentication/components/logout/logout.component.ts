import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { UserService } from './../../serveis/user.service';

@Component({
    selector: 'app-logout',
    moduleId: module.id,
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})

export class LogoutComponent {
    constructor(
        private userService: UserService,
        private routerExtensions: RouterExtensions
    ) {
        this.userService.logout()
    }

    entrar() {
        this.routerExtensions.navigate(["/participants"], { clearHistory: true });
    }

}