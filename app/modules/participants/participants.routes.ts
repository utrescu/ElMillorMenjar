import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ResultatsComponent } from './components/resultats/resultats.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { LlistaParticipantsComponent } from './components/llistaparticipants/llistaparticipants.component';
import { AuthGuard } from './../authentication/serveis/auth-guard.service';

export const authProviders = [
    AuthGuard
  ];


const participantsRoutes: Routes = [
    { path: "participants", component: LlistaParticipantsComponent, canActivate:[ AuthGuard ] },
    { path: 'participant/:id', component: ParticipantComponent, canActivate:[ AuthGuard ] },
    { path: 'resultats', component: ResultatsComponent, canActivate:[ AuthGuard ]},
];

export const PARTICIPANTSROUTES: ModuleWithProviders = RouterModule.forChild(participantsRoutes);