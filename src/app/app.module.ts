import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { DetailComponent } from './session/detail/detail.component';
import { ListComponent } from './session/list/list.component';
import { DetailCardComponent } from './session/detail-card/detail-card.component';
import {SessionDataService} from "./session/session-data.service";

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    DetailCardComponent,
    // RouterModule.forRoot([
    //   { path: 'session/:id', component: DetailComponent },
    //   { path: '', component: ListComponent },
    // ])
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SessionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
