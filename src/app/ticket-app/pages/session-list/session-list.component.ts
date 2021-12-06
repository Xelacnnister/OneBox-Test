import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { GetDataService } from '../../services/get-data.service';
import { EventInfo } from '../../interfaces/event-info.interface';
import { EventsList } from '../../interfaces/events-list.interface';
// import { GlobalDataService } from '../../services/global-data.service';
@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styles: [
    `
      .volver {
        margin: 20px;
      }
      .rowContainer {
        max-width: 1000px;
        margin: 0 auto;
      }

      .sessions {
        border: 1px solid black;
      }

      .fechasDisponibles {
        font-size: 18px;
        margin: 10px;
      }
    `
  ]
})
export class SessionListComponent implements OnInit {

  eventInfo!         : EventInfo;
  sessionAvailability: number[] = []
  sessionsNumber     : number[] = [];
  id!                : number;
  eventsList         : EventsList[] = [];
  buyedTickets!: number[];



  /** Llamada a las variables refactorizadas del servicio global-data.service **/

  // get buyedTickets(): number[] {
  //   return this.globaldataservice.buyedTickets;
  // }
  // get eventInfo(): EventInfo {
  //   return this.globaldataservice.eventInfo;
  // }
  // get sessionAvailability(): number[] {
  //   return this.globaldataservice.sessionAvailability;
  // }
  // get sessionsNumber(): number[] {
  //   return this.globaldataservice.sessionsNumber;
  // }



  /** Llamada a los servicios necesarios **/

  constructor( private  activatedRoute: ActivatedRoute,
               private getDataService: GetDataService,
               /*private globaldataservice: GlobalDataService*/) { 
  }

  ngOnInit(): void {



    /** Obtención de la data del evento por id, así podemos mostrar el evento seleccionado en el home.component **/

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.getDataService.getEventById( id ) )
      )
      .subscribe( eventInfo => {



        /** Asignación de variables en función de la data del evento recibida **/

        this.eventInfo = eventInfo;
        this.id = parseInt(eventInfo.event.id);
        this.eventInfo.sessions.map( session => {
          
          this.sessionAvailability.push( parseInt( session.availability ) );
          console.log("sessionAvailability", this.sessionAvailability);

          this.sessionsNumber.push( 0 ) ;
          console.log("SessionsNumber", this.sessionsNumber);

        } ); 
      });  
      
      // if( this.buyedTickets === undefined ){
      //   this.buyedTickets = this.sessionsNumber;
      //   console.log("Buyed Tickets", this.buyedTickets);
    
      // }
    
    
  }



  /** modNumbOfSessions permite controlar que no sea posible comprar menos de 0 entradas o más entradas de las que hay disponibles **/
 
  modNumbOfSessions(value: number, i: number) {
    if(this.sessionsNumber[i] !== 0 && value === - 1 || this.sessionsNumber[i] < this.sessionAvailability[i] && value === 1){
      this.sessionsNumber[i] += value;
    }
    else{
      console.log("There is no more sessions");
      
    }
  }



  /** Función preparada para remover items en el cart **/

  removeSession(i: number) {
    this.sessionsNumber[i] -= 1;
  }

}

/** Intentaba ESTABLECER UNA VARIABLE QUE NO MUTARA al cambiar el componente, yaque el numero de tickets se reinicia al cambiar 
    de componente y no se mantienen para poder mostrarlos en el cart --> Ver global-data service donde se intenta refactorización **/
  
  // modNumbOfSessions(value: number, i: number) {
  //   // this.globaldataservice.modNumbOfSessions(value, i)
  //   if(this.sessionsNumber[i] !== 0 && value === - 1 || this.sessionsNumber[i] < this.sessionAvailability[i] && value === 1){
  //     this.sessionsNumber[i] += value;
  //     if(this.eventsList.find(obj => obj.id === this.id) === undefined){
  //       this.eventsList.push({ id: this.id, buyedTickets: this.sessionsNumber});
  //       this.buyedTickets = this.eventsList.find(obj => obj.id === this.id )!.buyedTickets || this.sessionsNumber;
  //       console.log("Events List", this.eventsList);
  //       console.log("Buyed Tickets", this.buyedTickets);
  
  //     }else{
  //       this.eventsList.find(obj => obj.id === this.id )!.buyedTickets = this.sessionsNumber;
  //       this.buyedTickets = this.eventsList.find(obj => obj.id === this.id )!.buyedTickets;
  //       console.log("Events List", this.eventsList);
  //       console.log("Buyed Tickets", this.buyedTickets);  
  //     }

      
  //     // this.buyedTickets(this.sessionsNumber[i], i)
  //   }
  //   else{
  //     console.log("There is no more sessions");
      
  //   }
  //  }
  // buyedTickets(value: number, i: number) {
  //   this.getDataService.editEvent( this.eventInfo )
  //     .subscribe( eventInfo => console.log( 'Actualizando', eventInfo.sessions[i]))
  // }


  
  
