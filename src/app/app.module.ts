import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './ticket-app/pages/home/home.component';
import { SessionListComponent } from './ticket-app/pages/session-list/session-list.component';
import { HeaderComponent } from './ticket-app/pages/header/header.component';
import { EventCardComponent } from './ticket-app/pages/event-card/event-card.component';
import { ShoppingCartComponent } from './ticket-app/pages/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SessionListComponent,
    HeaderComponent,
    EventCardComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
