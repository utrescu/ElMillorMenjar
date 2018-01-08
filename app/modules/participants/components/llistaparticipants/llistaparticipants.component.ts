import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Participant } from "../../models/participant";
import { ParticipantService } from "../../serveis";
import { ERROR_COMPONENT_TYPE } from "@angular/core/src/errors";
import { DrawerPage } from "../drawer/drawer.page";
import { RouterExtensions } from "nativescript-angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-llista",
  moduleId: module.id,
  templateUrl: "./llistaparticipants.component.html"
})
export class LlistaParticipantsComponent extends DrawerPage implements OnInit {
  participants: Participant[];
  errMess: string;

  constructor(
    private router: Router,
    private routerExtensions: RouterExtensions,
    private serveiParticipants: ParticipantService,
    private changeDetectorRef: ChangeDetectorRef,
    @Inject("BaseURL") private BaseURL
  ) {
    super(changeDetectorRef);
  }

  ngOnInit() {
    // Fent servir la interfície REST
    // this.serveiParticipants.getParticipants()
    //  .subscribe( participants => this.participants = participants,
    //             errmess => this.errMess = <any>errmess);

    // Fent servir el plugin ...
    this.serveiParticipants
      .getParticipants2()
      .then(participants => (this.participants = participants))
      .catch(errmess => (this.errMess = <any>errmess));
  }

  sortir() {
    this.routerExtensions.navigate(["/logout"], { clearHistory: true });
  }
}
