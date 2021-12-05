import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventCardComponent } from './ticket-app/components/event-card/event-card.component';
import { HeaderComponent } from './ticket-app/components/header/header.component';
import { HomeComponent } from './ticket-app/pages/home/home.component';
import { SessionListComponent } from './ticket-app/pages/session-list/session-list.component';
import { ShoppingCartComponent } from './ticket-app/components/shopping-cart/shopping-cart.component';
import { MaterialModule } from './material/material.module';
import { OrderByPipe } from './pipes/order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    HeaderComponent,
    HomeComponent,
    SessionListComponent,
    ShoppingCartComponent,
    OrderByPipe,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
