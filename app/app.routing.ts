import { AuthGuard } from './modules/authentication/serveis/auth-guard.service';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

export const authProviders = [
    AuthGuard
];

const routes: Routes = [
    { path: "", redirectTo: "/participants", pathMatch: "full" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }