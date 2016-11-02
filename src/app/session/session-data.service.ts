import { Session } from "./Session";
import { Observable } from "rxjs";
import "rxjs/operator/map";
import "rxjs/operator/publishReplay";
import { Injectable } from "@angular/core";

const sessions = require("../../data/sessions.json");

@Injectable()
export class SessionDataService {

  getList(): Observable<Session[]> {
    return Observable.from([sessions]);
  }

  getById(id: number): Observable<Session> {
    return this.getList()
      .map(sessions => sessions.find(item => item.id === id))
  }
}
