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
}
