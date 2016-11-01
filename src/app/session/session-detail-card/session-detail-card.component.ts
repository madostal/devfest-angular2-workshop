import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Session } from "../../session/Session";
import { Speaker } from "../speaker";

@Component({
  selector: 'app-session-detail-card',
  templateUrl: './session-detail-card.component.html',
  styleUrls: ['./session-detail-card.component.css']
})
export class SessionDetailCardComponent {

  @Input() session: Session;
  @Output() onFavoriteClick = new EventEmitter<number>();

  constructor() {
  }

  onHeaderClick() {
    this.onFavoriteClick.emit(this.session.id);
  }

  getSpeakerNames() {
    let speakers: Speaker[] = this.session.speakers || []
    return speakers.map(speaker => speaker.name).join(', ');
  }
}
