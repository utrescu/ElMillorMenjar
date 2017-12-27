import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular'

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ParticipantsService } from './services/participants.service'
import { processaResposta } from './services/processaresposta.service'

import { LlistaParticipantsComponent } from "./components/llistaparticipants/llistaparticipants.component";
import { ParticipantComponent } from "./components/participant/participant.component";
import { ResultatsComponent } from "./components/resultats/resultats.component";

import { DrawerComponent } from "./shared/drawer/drawer.component";

import { baseURL } from './shared/baseurl'
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        LlistaParticipantsComponent,
        ParticipantComponent,
        ResultatsComponent,
        DrawerComponent
    ],
    providers: [
        {provide: 'BaseURL', useValue: baseURL},
        ParticipantsService,
        processaResposta,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
