import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from "angularfire2";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SessionDataService } from "./session/session-data.service";
import { Error404Component } from "./error/error404/error404.component";
import { SpeakerNamesPipe } from './session/speaker-names.pipe';
import { SessionDetailComponent } from './session/session-detail/session-detail.component';
import {SessionListComponent} from "./session/session-list/session-list.component";
import {SessionDetailCardComponent} from "./session/session-detail-card/session-detail-card.component";
import {SessionNotificationPanelComponent} from "./session/session-notification-panel/session-notification-panel.component";

export const firebaseConfig = {
  apiKey: "AIzaSyD6bJW38OVLOp7VfnsST8-w-HvpVWt7Jtk",
  authDomain: "devfest-angular2-workshop.firebaseapp.com",
  databaseURL: "https://devfest-angular2-workshop.firebaseio.com",
  storageBucket: "devfest-angular2-workshop.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    SpeakerNamesPipe,
    SessionDetailComponent,
    SessionListComponent,
    SessionNotificationPanelComponent,
    SessionDetailCardComponent,
    SessionDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [SessionDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
