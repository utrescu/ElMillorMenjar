import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";

const loginRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent }
];
export const AUTHROUTES: ModuleWithProviders = RouterModule.forChild(
  loginRoutes
);
