import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { Event } from "../../interfaces/event.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  // events: Event[] = [];

  constructor(  ) { } //private getDataService: GetDataService

  ngOnInit(): void {

  //   this.getDataService.getEvents()
  //     .subscribe( resp => { this.events = resp; } );

  }

}
