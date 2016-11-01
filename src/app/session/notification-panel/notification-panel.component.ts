import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {Observable} from "rxjs";
import "rxjs/operator/map"
import "rxjs/operator/take"


@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css']
})
export class NotificationPanelComponent {

  items: Observable<any[]>;

  constructor(af: AngularFire) {

    this.items = af.database.list('/likes', {
      query: {
        limitToLast: 6
      }
    })
      .map((lastItems) => {
        return lastItems.reverse();
      });

  }

}
