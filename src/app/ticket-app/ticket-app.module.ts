import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { EventCardComponent } from './pages/event-card/event-card.component';
import { SessionListComponent } from './pages/session-list/session-list.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    EventCardComponent,
    SessionListComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TicketAppModule { }
