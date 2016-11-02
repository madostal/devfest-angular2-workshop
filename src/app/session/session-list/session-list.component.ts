import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Session} from "../../session/Session";
import {FormControl} from "@angular/forms";
import {SessionDataService} from "../../session/session-data.service";

const sessions = require("../../../data/sessions-preview.json");

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnInit {

  sessions: Session[] = sessions;

  searchNameInput = new FormControl();

  constructor(private dataService: SessionDataService) { }

  ngOnInit(): void {

  }

}
