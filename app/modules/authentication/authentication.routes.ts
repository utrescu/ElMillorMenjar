import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";

const loginRoutes: Routes = [
  { path: "login", component: LoginComponent },
];
export const AUTHROUTES: ModuleWithProviders = RouterModule.forChild(loginRoutes);