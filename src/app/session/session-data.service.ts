import {Injectable} from '@angular/core';
import {Session} from "./Session";

const sessions = require('../../data/sessions.json');


@Injectable()
export class SessionDataService {

  constructor() {
  }

  getList(): Promise<Session[]> {
    return Promise.resolve(sessions);
  }

  getById(id: number): Promise<Session> {
    return this.getList()
      .then(sessions => sessions.find(item => item.id === id));
  }

}
