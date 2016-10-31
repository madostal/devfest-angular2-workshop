import {Injectable} from '@angular/core';
import {Session} from "./Session";
import {Http} from "@angular/http";

const sessions = require('../../data/sessions.json');


@Injectable()
export class SessionDataService {

  constructor() {
  }

  getList(): Promise<Session[]> {
    return Promise.resolve(sessions);
  }

  getById(id: number): Promise<Session|undefined> {
    return this.getList()
      .then(sessions => sessions.find(item => item.id === id));
  }

  search(text: string) {
    const lowerCaseText = text.toLowerCase();

    return this.getList()
      .then(sessions => sessions.filter(item => item.title.toLowerCase().indexOf(lowerCaseText) !== -1));

  }

}
