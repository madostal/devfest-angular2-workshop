import { Component, OnInit } from "@angular/core";
import { SessionDataService } from "../session-data.service";
import { Session } from "../Session";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/debounce";
import "rxjs/add/operator/startWith";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  observableSessions: Observable<Session[]>;

  searchNameInput = new FormControl();

  constructor(private dataService: SessionDataService) {
  }

  ngOnInit(): void {
    this.observableSessions = this.searchNameInput.valueChanges
      .startWith('')
      .debounce(() => Observable.interval(200))
      .distinctUntilChanged()
      .flatMap(term => this.dataService.search(term));
  }
}
