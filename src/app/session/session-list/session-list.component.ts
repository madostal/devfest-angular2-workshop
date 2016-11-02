import { Component, OnInit } from "@angular/core";
import { Session } from "../../session/Session";
import { SessionDataService } from "../session-data.service";
import { Observable } from "rxjs";

const sessions = require("../../../data/sessions-preview.json");

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnInit {

  sessions: Observable<Session[]>;

  constructor(private sessionDataService: SessionDataService) {
  }

  ngOnInit(): void {
    this.sessions = this.sessionDataService.getList();

  }

}
