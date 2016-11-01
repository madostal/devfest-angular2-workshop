import {Injectable} from '@angular/core';
import {Session} from "./Session";
import {Http} from "@angular/http";

import {Observable} from "rxjs";
import "rxjs/operator/map";

const sessions = require('../../data/sessions.json');


@Injectable()
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

  search(text: string) {
    const lowerCaseText = text.toLowerCase();

    return this.getList()
      .map(sessions => sessions.filter(item => item.title.toLowerCase().indexOf(lowerCaseText) !== -1));

  }

}

// @Injectable()
// export class SessionDataService {
//
//   constructor() {
//   }
//
//   getList(): Promise<Session[]> {
//     return Promise.resolve(sessions);
//   }
//
//   getById(id: number): Promise<Session|undefined> {
//     return this.getList()
//       .then(sessions => sessions.find(item => item.id === id));
//   }
//
//   search(text: string) {
//     const lowerCaseText = text.toLowerCase();
//
//     return this.getList()
//       .then(sessions => sessions.filter(item => item.title.toLowerCase().indexOf(lowerCaseText) !== -1));
//
//   }
//
// }
