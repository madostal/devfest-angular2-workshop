import { Injectable } from "@angular/core";
import { Session } from "./Session";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/operator/map";
import "rxjs/operator/publishReplay";

@Injectable()
export class SessionDataService {
  private sessionUrl = '/data/sessions.json';

  private cachedSessionsObservable: Observable < Session[] > = this.http.get(this.sessionUrl)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    .publishReplay(1)
    .refCount();

  constructor(private http: Http) {
  }

  getList(): Observable<Session[]> {
    return this.cachedSessionsObservable;
  }

  getById(id: number): Observable<Session> {
    return this.getList()
      .map(sessions => sessions.find(item => item.id === id))
  }

  search(text: string): Observable<Session[]> {
    const lowerCaseText = text.toLowerCase();

    return this.getList()
      .map(sessions => sessions.filter(item => item.title.toLowerCase().indexOf(lowerCaseText) !== -1));
  }
}
