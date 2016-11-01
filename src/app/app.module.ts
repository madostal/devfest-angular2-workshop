import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { Error404Component } from "./error/error404/error404.component";
import { SpeakerNamesPipe } from './session/speaker-names.pipe';
import { SessionDetailCardComponent } from './session/session-detail-card/session-detail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    SpeakerNamesPipe,
    SessionDetailCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
