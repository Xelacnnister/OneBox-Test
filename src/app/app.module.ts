import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventCardComponent } from './ticket-app/pages/event-card/event-card.component';
import { HeaderComponent } from './ticket-app/pages/header/header.component';
import { HomeComponent } from './ticket-app/pages/home/home.component';
import { SessionListComponent } from './ticket-app/pages/session-list/session-list.component';
import { ShoppingCartComponent } from './ticket-app/pages/shopping-cart/shopping-cart.component';
import { MaterialModule } from './material/material.module';
import { StringToTemplatePipe } from './pipes/string-to-template.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    HeaderComponent,
    HomeComponent,
    SessionListComponent,
    ShoppingCartComponent,
    StringToTemplatePipe
    
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
