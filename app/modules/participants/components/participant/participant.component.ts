import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { ERROR_COMPONENT_TYPE } from "@angular/core/src/errors";
import { ActivatedRoute, Params } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

import { Participant } from "../../models/participant";
import { Comment } from "../../models/comments";
import { ParticipantService } from "../../serveis";
import { LogService } from "../../../core/serveis/log.service";

@Component({
  selector: "app-participant",
  moduleId: module.id,
  templateUrl: "./participant.component.html",
  styleUrls: ["participant.component.css"]
})
export class ParticipantComponent implements OnInit {
  participant: Participant;
  comment: Comment;
  errMess: string;

  private sub: any;
  id: number;

  constructor(
    private serveiParticipants: ParticipantService,
    private logService: LogService,
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    @Inject("BaseURL") private BaseURL
  ) {
    // Si no l'inicialitzo el plugin no carrega bé les dades.
    this.participant = {
      id: 0,
      name: "",
      image: "",
      description: "",
      comments: [],
      vots: 0
    };
  }

  ngOnInit() {
    // ---> Fent servir la interfície REST ...
    // this.route.params
    //   .switchMap((params: Params) => this.serveiParticipants.getParticipant(+params['id']))
    //   .subscribe(participant => this.participant = participant,
    //              errmess => { this.participant = null; this.errMess = <any>errmess; });

    // Per fer servir el PLUGIN ...
    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.serveiParticipants
        .getParticipant2(this.id)
        .then(participant => {
          this.participant = participant;
        })
        .catch(errmess => {
          this.participant = null;
          this.errMess = <any>errmess;
        });
    });
  }

  ngOnDestroy() {
    // Només cal per quan es fa servir el plugin
    this.sub.unsubscribe();
  }

  goBack(): void {
    this.routerExtensions.back();
  }

  votar(): void {
    this.logService.debug(
      "Voto " +
        this.participant.id +
        " " +
        this.participant.name +
        " -> " +
        this.participant.vots
    );

    this.serveiParticipants.votaParticipant(this.participant);
    this.routerExtensions.navigate(["/resultats"], { clearHistory: false });
  }

  sortir() {
    this.routerExtensions.navigate(["/logout"], { clearHistory: true });
  }
}
