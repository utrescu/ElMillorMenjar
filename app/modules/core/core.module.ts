// nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SERVEIS } from './serveis';

@NgModule({
    imports: [ NativeScriptModule ],
    providers: [ ...SERVEIS ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class CoreModule { }