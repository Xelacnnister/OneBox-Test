import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Event } from "../interfaces/event.interface";


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private baseUrl: string = '../../../assets/data/events.json';

  constructor( private http: HttpClient ) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>( `${this.baseUrl}`);
  }

  // getSortData(events: Event[]): Event[] {
  //   return events.sort( ( a, b ) => {
  //     return <any> new Date( b.endDate ) - <any> new Date( a.endDate )
  //   } )
  // }
}
