import {Component, OnInit, Input} from '@angular/core';
import {SessionDataService} from "../session-data.service";
import {Session} from "../Session";
import {ActivatedRoute, Params} from "@angular/router";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  session: Session;

  constructor(private route: ActivatedRoute,
              private dataService: SessionDataService,
              private angularFire: AngularFire) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = parseInt(params['id']);

      this.dataService.getById(id)
        .subscribe(session => {
          this.session = session
        });
    });


  }

  onFavoriteClick(id) {
    const likes = this.angularFire.database.list('/likes');
    likes.push({
      sessionTitle: this.session.title,
      sessionId: id,
      user: "Milan" // TODO user - statická data z env nebo nějaké služby?
    });
  }

}
