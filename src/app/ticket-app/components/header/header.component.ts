import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      mat-toolbar {
        height:100px;
        background-color: #7EC0DB;
        box-shadow: 2px 10px 8px #434343;
        margin-bottom: 40px
      }
    `
  ]
})
export class HeaderComponent implements OnInit {

  title: string = 'header';

  constructor() { }

  ngOnInit(): void {
  }

}
