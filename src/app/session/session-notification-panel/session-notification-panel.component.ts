import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFire } from "angularfire2";
import {SessionLike} from "../session-like";

@Component({
  selector: 'app-session-notification-panel',
  templateUrl: './session-notification-panel.component.html',
})
export class SessionNotificationPanelComponent {

  items: Observable<SessionLike[]>;

  constructor(af: AngularFire) {
    const firebaseQuery = {
      query: {
        limitToLast: 6
      }
    };

    this.items = af.database.list('/likes', firebaseQuery)
      .map(lastItems => lastItems.reverse());

  }
}

