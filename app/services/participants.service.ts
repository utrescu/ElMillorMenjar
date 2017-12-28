import { Injectable } from '@angular/core';
import { Participant } from '../shared/participant'
import { Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http'
import { baseURL } from '../shared/baseurl'
import { processaResposta } from "./processaresposta.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';


@Injectable()
export class ParticipantsService {
    constructor( public http: Http,
                 private processa: processaResposta) {

    }

    getParticipants() : Observable<Participant[]> {

        return this.http.get(baseURL + 'participants')
        .map(res => { return this.processa.extractData(res); })
        .catch ( error => { return this.processa.handleError(error)}
        );
    }

    getParticipant(id: number): Observable<Participant> {
        return this.http.get(baseURL + 'participants/' + id)
        .map(res => { return this.processa.extractData(res);})
        .catch ( error => { return this.processa.handleError(error)})
    }

}
