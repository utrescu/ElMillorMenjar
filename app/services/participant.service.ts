import { BackendService } from './backend.service';
import { Injectable, NgZone } from '@angular/core';
import { Participant } from '../shared/participant'
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { baseURL } from '../shared/baseurl'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/share';



import firebase = require("nativescript-plugin-firebase");


@Injectable()
export class ParticipantService {

    // private _cars: Array<Car> = [];
    // private participants: Participant[];

    participants: BehaviorSubject<Array<Participant>> = new BehaviorSubject([]);
    private _allItems: Array<Participant> = [];

    constructor( public http: HttpClient,
        private ngZone: NgZone) {

    }

    private createCapsalera() {
        let headers = new HttpHeaders();
//        headers.append("AuthKey", "my-key");
//        headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");

        return headers;
    }

    // Obtenir els participants fent servir la interfície REST
    // ----------------------------------------------------------
    getParticipants() : Observable<Participant[]> {
        let headers = this.createCapsalera();
        return this.http.get<Participant[]>(baseURL + 'participants.json', { headers: headers });
//        .map(res => res );
    }

    getParticipantsOrderByVots() : Observable<Participant[]> {
        let headers = this.createCapsalera();
        return this.http.get<Participant[]>(baseURL + 'participants?_sort=vots&_order=desc', { headers: headers });
//        .map(res => res );
    }

    // Obtenir el participant fent servir la interfície REST
    // ----------------------------------------------------------
    getParticipant(id: number): Observable<Participant> {
        let headers = this.createCapsalera();
        return this.http.get<Participant>(baseURL + 'participants/' + id + '.json');
//        .map(res => res );
    }

    //  PLUGIN
    // ------------------------------------------------------------------------

    // Obtenir els participants fent servir el plugin
    // --------------------------------------------------------
    getParticipants2(): Promise<any> {
        return firebase.getValue('/participants')
        .then(this.extractData)
        .catch(this.extractError)
    }

    // Obtenir el participant fent servir el plugin ...
    // ----------------------------------------------------
    getParticipant2(id: number): Promise<any> {
        return firebase.getValue('/participants/' + id)
                .then(this.extractData)
                .catch(this.extractError)
    }

    extractData(res) {
        console.log(JSON.stringify(res.value));
        return res.value || {};
    }

    extractError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    // Votar el participant fent servir el plugin
    // ----------------------------------------------------------
    votaParticipant(data: Participant) {
    //     let headers = this.createCapsalera();
     let vots = { vots: data.vots  + 1 };
    //     return this.http.patch<Participant>(baseURL + 'participants/' + data.id + '.json?access_token=' + BackendService.token, vots, { headers: headers})
    //
    firebase.update(
       '/participants/' + data.id,
        vots
        );
    }
}
