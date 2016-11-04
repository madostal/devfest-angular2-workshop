import { Component, OnInit } from "@angular/core";
import { Session } from "../../session/session";

const sessions = require("../../../data/sessions-preview.json");

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnInit {

  sessions: Session[] = sessions;

  constructor() {
  }

  ngOnInit(): void {

  }

}
