// Permet simplificar la importació de mòduls
// Només cal fer:
//
//   import { SERVEIS } from './services';
//
import { AuthGuard } from "./auth-guard.service";
import { UserService } from "./user.service";

export const SERVEIS: any[] = [AuthGuard, UserService];
export * from "./auth-guard.service";
export * from "./user.service";
