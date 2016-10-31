import {Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from "@angular/forms/src/facade/async";
import {SessionDataService} from "../session-data.service";
import {Session} from "../Session";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() id: number;

  session: Session;

  constructor(private dataService: SessionDataService) {
  }

  ngOnInit(): void {
    this.dataService.getById(this.id)
      .then(session => this.session = session);
  }


}
