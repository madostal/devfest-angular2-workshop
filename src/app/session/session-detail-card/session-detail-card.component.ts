import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Session} from "../session";
import {Speaker} from "../speaker";

@Component({
  selector: 'app-session-detail-card',
  templateUrl: './session-detail-card.component.html',
  styleUrls: ['./session-detail-card.component.css']
})
export class SessionDetailCardComponent implements OnInit {

  @Input() session: Session;

  @Output() onFavoriteClick = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  getSpeakerNames() {
    let speakers: Speaker[] = this.session.speakers || [];
    return speakers.map(speaker => speaker.name).join(', ');
  }

  onHeaderClick() {
    this.onFavoriteClick.emit(this.session);
  }

}
