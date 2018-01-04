import { Participant } from './../models/participant';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ordenaparticipants'
})

export class OrdenaParticipants implements PipeTransform {
    transform(array: Array<Participant>): Array<Participant> {
        array.sort((a: Participant, b: Participant) => {
          if (a.vots < b.vots) {
            return 1;
          } else if (a.vots > b.vots) {
            return -1;
          } else {
            return 0;
          }
        });
        return array;
      }
    }