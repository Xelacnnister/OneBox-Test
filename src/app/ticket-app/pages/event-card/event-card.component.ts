import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { Event } from "../../interfaces/event.interface";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styles: [
    `
      .date, .place {
        font-weight: bold;
      }

      .rowContainer {
        max-width: 1000px;
        margin: 0 auto;
      }
      mat-card {
        height: 475px;
        max-width: 500px;
        border: solid 1px black;
        margin: 20px;
        padding-bottom: 7px;
      }

      mat-card-content {
        margin: 0;
      }

      .description {
        margin-top: 10px;
      }

      mat-card-actions {
        margin-top: auto;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      
      .buyButton {

        display: block;
        width: 100%;
        height: 50px;
        border: none;
        color: white;
        background-color: #008CBA;
        padding: 14px 28px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        text-align: center;
        border-radius: 0 0 3px 3px;
      }

      .buyButton:hover {
        background-color: #006687;
      }

      .buyButton:active {
        background-color: #006687;
        transform: translateY(4px);
      }

    `
  ]
})
export class EventCardComponent implements OnInit {

  events      : Event[] = [];

  constructor( private getDataService: GetDataService ) { }

  ngOnInit(): void {

    this.getDataService.getEvents()
      .subscribe( resp => { this.events = resp ; } );
    
  }


}

