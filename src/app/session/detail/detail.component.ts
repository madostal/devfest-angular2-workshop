import { Component, OnInit } from "@angular/core";
import { SessionDataService } from "../session-data.service";
import { Session } from "../Session";
import { ActivatedRoute } from "@angular/router";
import { AngularFire } from "angularfire2";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

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

  onFavoriteClick(id) {
    const likes = this.angularFire.database.list('/likes');

    likes.push({
      sessionTitle: this.session.title,
      sessionId: id,
      user: "Milan"
    });
  }
}
