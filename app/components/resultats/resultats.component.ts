import { Component, OnInit, Inject } from '@angular/core'
import { Participant } from "../../shared/participant";
import { ParticipantsService } from '../../services/participants.service'
import { RouterExtensions } from 'nativescript-angular/router';
import { ERROR_COMPONENT_TYPE } from '@angular/core/src/errors';
import 'rxjs/add/operator/switchMap';


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
    private serveiParticipants: ParticipantsService,
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