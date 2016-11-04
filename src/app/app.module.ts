import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { Error404Component } from "./error/error404/error404.component";
import { SpeakerNamesPipe } from "./session/speaker-names.pipe";
import { SessionDetailComponent } from "./session/session-detail/session-detail.component";
import { SessionListComponent } from "./session/session-list/session-list.component";
import { SessionDetailCardComponent } from "./session/session-detail-card/session-detail-card.component";

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    SpeakerNamesPipe,
    SessionDetailComponent,
    SessionListComponent,
    SessionDetailCardComponent,
    SessionDetailComponent
  ],

  // TODO přidejte závislost na routing modulu

  imports: [
    BrowserModule,
    HttpModule,
  ],

  // TODO přidejte injektovatelnou službu

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
