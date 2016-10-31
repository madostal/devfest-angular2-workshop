import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {Observable} from "rxjs";
import "rxjs/operator/takeLast"
import "rxjs/operator/take"
import {takeLast} from "rxjs/operator/takeLast";

const sessions = require('../../../data/sessions-preview.json');


@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css']
})
export class NotificationPanelComponent {

  myItems: Observable<any[]>;
  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {

    this.items = af.database.list('/likes', {
      query: {
        limitToLast: 10
      }
    });

  }

}
