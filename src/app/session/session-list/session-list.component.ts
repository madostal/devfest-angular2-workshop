import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Session } from "../../session/session";
import { FormControl } from "@angular/forms";
import { SessionDataService } from "../../session/session-data.service";

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnInit {

  observableSessions: Observable<Session[]>;

  // TODO přidejte vlastnost searchNameInput

  constructor(private dataService: SessionDataService) {
  }

  ngOnInit(): void {

    // TODO použijte operátory observables
    this.observableSessions = this.dataService.getList();
  }

}
