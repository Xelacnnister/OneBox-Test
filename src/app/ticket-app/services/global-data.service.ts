/*INTENTO DE REFACTORIZACIÓN DEL CÓDIGO de session-list.component con intención de obtener una variable global que no se reinice al cambiar de componente */

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { EventInfo } from '../interfaces/event-info.interface';
import { EventsList } from '../interfaces/events-list.interface';
import { GetDataService } from './get-data.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  private _buyedTickets!: number[];
  public get buyedTickets(): number[] {
    return this._buyedTickets;
  }
  public set buyedTickets(value: number[]) {
    this._buyedTickets = value;
  }
  private _eventInfo!: EventInfo;
  public get eventInfo(): EventInfo {
    return this._eventInfo;
  }
  public set eventInfo(value: EventInfo) {
    this._eventInfo = value;
  }
  private _sessionAvailability: number[] = []
  private _sessionsNumber     : number[] = [];
  private _id!: number;
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  private _eventsList         : EventsList[] = [];


  get sessionAvailability(): number[] {
    return [... this._sessionAvailability];
  }
  get sessionsNumber(): number[] {
    return [... this._sessionsNumber];
  }
  get eventsList(): EventsList[] {
    return [... this._eventsList]
  }
  // get id(): number {
  //   return this.id;
  // }


  constructor( private  activatedRoute: ActivatedRoute,
               private getDataService: GetDataService, ) {
    console.log("Working service");
    
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.getDataService.getEventById( id ) )
    )
    .subscribe( eventInfo => {
      this.eventInfo = eventInfo;
      this.id = parseInt(eventInfo.event.id);
      this.eventInfo.sessions.map( session => {
        
        this.sessionAvailability.push( parseInt( session.availability ) );
        console.log("sessionAvailability", this.sessionAvailability);
 
        // this.sessionsNumber.push( 0 ) ;
        // console.log("SessionsNumber", this.sessionsNumber);
 
      } ); 
    });  
    
    if( this.buyedTickets === undefined ){
      this.buyedTickets = this.sessionsNumber;
      console.log("Buyed Tickets", this.buyedTickets);
  
    }
 
   }

   modNumbOfSessions(value: number, i: number) {
    if(this.sessionsNumber[i] !== 0 && value === - 1 || this.sessionsNumber[i] < this.sessionAvailability[i] && value === 1){
      this.sessionsNumber[i] += value;
      if(this.eventsList.find(obj => obj.id === this.id) === undefined){
        this.eventsList.push({ id: this.id, buyedTickets: this.sessionsNumber});
        this.buyedTickets = this.eventsList.find(obj => obj.id === this.id )!.buyedTickets || this.sessionsNumber;
        console.log("Events List", this.eventsList);
        console.log("Buyed Tickets", this.buyedTickets);
  
      }else{
        this.eventsList.find(obj => obj.id === this.id )!.buyedTickets = this.sessionsNumber;
        this.buyedTickets = this.eventsList.find(obj => obj.id === this.id )!.buyedTickets;
        console.log("Events List", this.eventsList);
        console.log("Buyed Tickets", this.buyedTickets);  
      }

      
      // this.buyedTickets(this.sessionsNumber[i], i)
    }
    else{
      console.log("There is no more sessions");
      
    }
  }
 
 



}
