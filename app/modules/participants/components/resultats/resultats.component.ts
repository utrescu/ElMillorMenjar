import { Component, OnInit, OnDestroy, Inject, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ERROR_COMPONENT_TYPE } from "@angular/core/src/errors";
import "rxjs/add/operator/switchMap";

import { Participant } from "../../models/participant";
import { ParticipantService } from "../../serveis";

@Component({
  selector: "app-resultats",
  moduleId: module.id,
  templateUrl: "./resultats.component.html",
  styleUrls: ["./resultats.component.css"]
})
export class ResultatsComponent implements OnInit {
  classificacio: Participant[];
  errMess: string;

  constructor(
    private serveiParticipants: ParticipantService,
    private routerExtensions: RouterExtensions,
    private ngzone: NgZone,
    @Inject("BaseURL") private BaseURL
  ) {}

  ngOnInit() {
    this.serveiParticipants.startMonitorResultats();

    this.serveiParticipants.rebutCanvi.subscribe(data => {
      this.ngzone.run(() => {
        this.classificacio = data;
      });
    }, errMess => (this.errMess = <any>errMess));
  }

  ngOnDestroy() {
    console.log("Eliminar listener");
    this.serveiParticipants.stopMonitorResultats();
  }

  goBack(): void {
    this.routerExtensions.back();
  }
}
