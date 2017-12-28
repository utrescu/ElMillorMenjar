import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core'
import { Participant } from "../../shared/participant";
import { ParticipantService } from '../../services/participant.service'
import { ERROR_COMPONENT_TYPE } from '@angular/core/src/errors';
import { DrawerPage } from '../../shared/drawer/drawer.page';

@Component( {
    selector: 'app-llista',
    moduleId: module.id,
    templateUrl: './llistaparticipants.component.html'
})
export class LlistaParticipantsComponent extends DrawerPage implements OnInit {

    participants: Participant[];
    errMess: string;

    constructor(
        private serveiParticipants: ParticipantService,
        private changeDetectorRef:ChangeDetectorRef,
        @Inject('BaseURL') private BaseURL) {
            super(changeDetectorRef)
        }

    ngOnInit() {
        this.serveiParticipants.getParticipants()
        .subscribe( participants => this.participants = participants,
                    errmess => this.errMess = <any>errmess);
    }

}