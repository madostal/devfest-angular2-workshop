import { Component } from "@angular/core";
import { AngularFire } from "angularfire2";
import { Observable } from "rxjs";
import "rxjs/operator/map";
import "rxjs/operator/take";

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html'
})
export class NotificationPanelComponent {

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
