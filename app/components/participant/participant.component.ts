import { Component, OnInit, Inject } from '@angular/core'
import { Participant } from "../../shared/participant";
import { Comment } from "../../shared/comments";
import { ParticipantService } from '../../services/participant.service'
import { ERROR_COMPONENT_TYPE } from '@angular/core/src/errors';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import 'rxjs/add/operator/switchMap';

@Component( {
    selector: 'app-participant',
    moduleId: module.id,
    templateUrl: './participant.component.html',
    styleUrls: [ 'participant.component.css' ]
})
export class ParticipantComponent implements OnInit {

    participant: Participant;
    comment: Comment;
    errMess: string;

    constructor(
        private serveiParticipants: ParticipantService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        @Inject('BaseURL') private BaseURL) {

        }

        ngOnInit() {

            this.route.params
              .switchMap((params: Params) => this.serveiParticipants.getParticipant(+params['id']))
              .subscribe(participant => this.participant = participant,
                         errmess => { this.participant = null; this.errMess = <any>errmess; });
          }

          goBack(): void {
            this.routerExtensions.back();
          }

          votar(): void {
              console.log("Voto " + this.participant.id + " " + this.participant.name);
              this.serveiParticipants.votaParticipant(this.participant).subscribe(
                  result =>  {
                      this.participant = result;
                      // Redirigir a resultats ...
                      this.routerExtensions.navigate(["/resultats"], { clearHistory: false })
                  },
                  errmess => { this.participant = null; this.errMess = <any>errmess; }
              )
          }
}