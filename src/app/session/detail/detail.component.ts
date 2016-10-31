import {Component, OnInit, Input} from '@angular/core';
import {SessionDataService} from "../session-data.service";
import {Session} from "../Session";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  session: Session;

  constructor(private route: ActivatedRoute,
              private dataService: SessionDataService) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = parseInt(params['id']);

      this.dataService.getById(id)
        .then(session => {
          this.session = session
        });
    });


  }

}
