import { Component, OnInit, Inject } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router';
import { ERROR_COMPONENT_TYPE } from '@angular/core/src/errors';
import 'rxjs/add/operator/switchMap';

import { Participant } from "../../models/participant";
import { ParticipantService } from '../../serveis'

@Component({
  selector: 'app-resultats',
  moduleId: module.id,
  templateUrl: './resultats.component.html',
  styleUrls: [ './resultats.component.css']
})
export class ResultatsComponent implements OnInit{

  classificacio: Participant[];
  errMess: string;

  constructor(
    private serveiParticipants: ParticipantService,
    private routerExtensions: RouterExtensions,
    @Inject('BaseURL') private BaseURL) {

    }

    ngOnInit() {
      this.serveiParticipants.getParticipants()
        .subscribe( participants => this.classificacio = participants,
                    errmess => this.errMess = <any>errmess);
    }

    goBack(): void {
      this.routerExtensions.back();
    }

}