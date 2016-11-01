import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from "angularfire2";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DetailComponent } from "./session/detail/detail.component";
import { ListComponent } from "./session/list/list.component";
import { DetailCardComponent } from "./session/detail-card/detail-card.component";
import { SessionDataService } from "./session/session-data.service";
import { Error404Component } from "./error/error404/error404.component";
import { NotificationPanelComponent } from "./session/notification-panel/notification-panel.component";
import { SpeakerNamesPipe } from './session/speaker-names.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyD6bJW38OVLOp7VfnsST8-w-HvpVWt7Jtk",
  authDomain: "devfest-angular2-workshop.firebaseapp.com",
  databaseURL: "https://devfest-angular2-workshop.firebaseio.com",
  storageBucket: "devfest-angular2-workshop.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    DetailCardComponent,
    Error404Component,
    NotificationPanelComponent,
    SpeakerNamesPipe
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
