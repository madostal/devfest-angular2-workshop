import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";

import {DetailComponent} from './session/detail/detail.component';
import {ListComponent} from './session/list/list.component';
import {DetailCardComponent} from './session/detail-card/detail-card.component';
import {SessionDataService} from "./session/session-data.service";
import {Error404Component} from './error/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    DetailCardComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SessionDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
