// nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// Shared module
import { CoreModule } from '../core/core.module';

import { AUTHROUTES } from './authentication.routes'
import { SERVEIS } from './serveis';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AUTHROUTES,
        CoreModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
        ...SERVEIS
    ],
    declarations: [
        LoginComponent
    ]
})
export class AuthenticationModule {

}