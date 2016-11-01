import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFire } from "angularfire2";

@Component({
  selector: 'app-session-notification-panel',
  templateUrl: './session-notification-panel.component.html',
})
export class SessionNotificationPanelComponent {

  items: Observable<any[]>;

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

