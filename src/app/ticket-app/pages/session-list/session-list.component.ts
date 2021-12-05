import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GetDataService } from '../../services/get-data.service';
import { EventInfo } from '../../interfaces/event-info.interface';
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

  eventInfo!: EventInfo;
  sessionNumber: number = 0;

  constructor( private  activatedRoute: ActivatedRoute,
               private getDataService: GetDataService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.getDataService.getEventById( id ) )
      )
      .subscribe( eventInfo => this.eventInfo = eventInfo);
  }

}
