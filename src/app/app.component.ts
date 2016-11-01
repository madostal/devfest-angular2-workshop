import { Component } from "@angular/core";
import {Session} from "./session/session";

const sessions = require('../data/sessions-preview.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  sessionExample: Session = sessions[1];

  favoriteClickHandler(session: Session) {
    console.log('AppComponent - favoriteClickHandler', session)
  }
}
