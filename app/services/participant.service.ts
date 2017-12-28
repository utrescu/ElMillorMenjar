import { Injectable } from '@angular/core';
import { Participant } from '../shared/participant'
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { baseURL } from '../shared/baseurl'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';


@Injectable()
export class ParticipantService {
    constructor( public http: HttpClient) {

    }

    private createCapsalera() {
        let headers = new HttpHeaders();
//        headers.append("AuthKey", "my-key");
//        headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");

        return headers;
    }

    getParticipants() : Observable<Participant[]> {
        let headers = this.createCapsalera();
        return this.http.get<Participant[]>(baseURL + 'participants', { headers: headers });
//        .map(res => res );
    }

    getParticipantsOrderByVots() : Observable<Participant[]> {
        let headers = this.createCapsalera();
        return this.http.get<Participant[]>(baseURL + 'participants?_sort=vots&_order=desc', { headers: headers });
//        .map(res => res );
    }

    getParticipant(id: number): Observable<Participant> {
        let headers = this.createCapsalera();
        return this.http.get<Participant>(baseURL + 'participants/' + id);
//        .map(res => res );
    }


    votaParticipant(data: Participant): Observable<Participant> {
        let headers = this.createCapsalera();
        data.vots = data.vots + 1;
        return this.http.put<Participant>(baseURL + 'participants/' + data.id, data, { headers: headers})
    }



}
