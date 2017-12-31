import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LlistaParticipantsComponent } from './components/llistaparticipants/llistaparticipants.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { ResultatsComponent } from "./components/resultats/resultats.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./services/auth-guard.service";

export const authProviders = [
    AuthGuard
  ];


const routes: Routes = [
    { path: "", redirectTo: "/participants", pathMatch: "full" },
    { path: "participants", component: LlistaParticipantsComponent, canActivate:[ AuthGuard ] },
    { path: 'participant/:id', component: ParticipantComponent, canActivate:[ AuthGuard ] },
    { path: 'resultats', component: ResultatsComponent, canActivate:[ AuthGuard ]},
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }