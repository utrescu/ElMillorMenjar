import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LlistaParticipantsComponent } from './components/llistaparticipants/llistaparticipants.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { ResultatsComponent } from "./components/resultats/resultats.component";


const routes: Routes = [
    { path: "", redirectTo: "/participants", pathMatch: "full" },
    { path: "participants", component: LlistaParticipantsComponent },
    { path: 'participant/:id', component: ParticipantComponent },
    { path: 'resultats', component: ResultatsComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }