import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";

import { AppRoutingModule, authProviders } from "./app.routing";
import { AppComponent } from "./app.component";

import { baseURL } from "./modules/core/baseurl";

// Mòduls
import { CoreModule } from "./modules/core/core.module";
import { ParticipantsModule } from "./modules/participants/participants.module";
import { AuthenticationModule } from "./modules/authentication/authentication.module";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptUISideDrawerModule,
    CoreModule,
    ParticipantsModule,
    AuthenticationModule
  ],
  declarations: [AppComponent],
  providers: [{ provide: "BaseURL", useValue: baseURL }, authProviders],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
