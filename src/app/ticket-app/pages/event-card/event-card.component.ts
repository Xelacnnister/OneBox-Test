import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { Event } from "../../interfaces/event.interface";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styles: [
  ]
})
export class EventCardComponent implements OnInit {

  events: Event[] = [];

  constructor( private getDataService: GetDataService ) { }

  ngOnInit(): void {

    this.getDataService.getEvents()
      .subscribe( resp => { this.events = resp ; } );

  }


}

