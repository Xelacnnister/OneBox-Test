import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { EventCardComponent } from './ticket-app/pages/event-card/event-card.component';
import { HeaderComponent } from './ticket-app/pages/header/header.component';
import { HomeComponent } from './ticket-app/pages/home/home.component';
import { SessionListComponent } from './ticket-app/pages/session-list/session-list.component';
import { ShoppingCartComponent } from './ticket-app/pages/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    HeaderComponent,
    HomeComponent,
    SessionListComponent,
    ShoppingCartComponent
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
