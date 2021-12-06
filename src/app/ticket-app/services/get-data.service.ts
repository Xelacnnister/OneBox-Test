/** Servicio para obtener la data necesaria mediante las llamadas HTTP **/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EventInfo} from '../interfaces/event-info.interface';
import { Event } from "../interfaces/event.interface";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private baseUrl: string = '../../../assets/data/events.json';

  constructor( private http: HttpClient ) { }


  /** Obtiene la lista de eventos **/

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>( `${this.baseUrl}`);
  }


  /** Obtiene la información de un evento seleccionado **/

  getEventById( id: string): Observable<EventInfo> {
    return this.http.get<EventInfo>(`../../../assets/data/event-info-${ id }.json`);
  }

}
