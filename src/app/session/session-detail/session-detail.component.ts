import {Component, OnInit} from "@angular/core";
import {SessionDataService} from "../session-data.service";
import {Session} from "../Session";
import {ActivatedRoute} from "@angular/router";
import {AngularFire} from "angularfire2";
import {SessionLike} from "../session-like";

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {

  session: Session;

  constructor(private route: ActivatedRoute,
              private dataService: SessionDataService,
              private angularFire: AngularFire) {
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];

    this.dataService.getById(id)
      .subscribe(session => {
        this.session = session
      });
  }

  onFavoriteClick(session) {
    const likes = this.angularFire.database.list('/likes');

    const notification: SessionLike = {
      sessionTitle: session.title,
      sessionId: session.id,
      user: "Milan"
    };

    likes.push(notification);
  }
}
