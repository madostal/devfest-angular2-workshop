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

  searchNameInput = new FormControl();

  constructor(private dataService: SessionDataService) {}

  ngOnInit(): void {
    this.observableSessions = this.searchNameInput.valueChanges
      .startWith('')
      .debounce(() => Observable.interval(200))
      .distinctUntilChanged()
      .flatMap(term => this.dataService.search(term));
  }

}
