import { Session } from "./session";
import { Observable } from "rxjs";
import "rxjs/operator/map";
import "rxjs/operator/publishReplay";

const sessions = require("../../data/sessions.json");

export class SessionDataService {

  constructor() {
  }

  getList(): Observable<Session[]> {
    return Observable.from([sessions]);
  }

  getById(id: number): Observable<Session> {
    return this.getList()
      .map(sessions => sessions.find(item => item.id === id))
  }
}
