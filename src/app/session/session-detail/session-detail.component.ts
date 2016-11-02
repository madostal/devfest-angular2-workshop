import {Component, OnInit, Input} from "@angular/core";
import { Session } from "../Session";
import { ActivatedRoute } from "@angular/router";
import { SessionDataService } from "../session-data.service";

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {

  session: Session;

  constructor(private route: ActivatedRoute, private sessionDataService: SessionDataService) {
  }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.params['id']);

    this.sessionDataService.getById(id)
      .subscribe(session => {this.session = session});
  }

  favoriteClickHandler(session: Session) {
    console.log('SessionDetailComponent - favoriteClickHandler', session)
  }
}
