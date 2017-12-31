import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular'

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

// Serveis
import { ParticipantService } from './services/participant.service'
import { UserService } from "./services/user.service";
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { BackendService } from './services/backend.service';
import { AuthGuard } from './services/auth-guard.service';


// Components
import { LlistaParticipantsComponent } from "./components/llistaparticipants/llistaparticipants.component";
import { ParticipantComponent } from "./components/participant/participant.component";
import { ResultatsComponent } from "./components/resultats/resultats.component";
import { LoginComponent } from "./components/login/login.component";
import { DrawerComponent } from "./shared/drawer/drawer.component";

import { baseURL } from './shared/baseurl'

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        LlistaParticipantsComponent,
        ParticipantComponent,
        ResultatsComponent,
        LoginComponent,
        DrawerComponent
    ],
    providers: [
        {provide: 'BaseURL', useValue: baseURL},
        ParticipantService,
        UserService,
        AuthGuard,
        BackendService,
        ErrorInterceptorProvider,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
