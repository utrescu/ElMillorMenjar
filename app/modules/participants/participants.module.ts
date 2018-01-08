// nativescript
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";

// angular
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";

// shared module
import { CoreModule } from "../core/core.module";

// Components
import { DrawerComponent } from "./components/drawer/drawer.component";
import { LlistaParticipantsComponent } from "./components/llistaparticipants/llistaparticipants.component";
import { ParticipantComponent } from "./components/participant/participant.component";
import { ResultatsComponent } from "./components/resultats/resultats.component";

// Rutes
import { PARTICIPANTSROUTES } from "./participants.routes";
// Serveis
import { SERVEIS } from "./serveis";
// Pipes
import { PIPES } from "./pipes";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptFormsModule,
    NativeScriptUISideDrawerModule,
    CoreModule,
    PARTICIPANTSROUTES
  ],
  providers: [...SERVEIS],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    ...PIPES,
    ParticipantComponent,
    LlistaParticipantsComponent,
    ResultatsComponent,
    DrawerComponent
  ]
})
export class ParticipantsModule {}
