import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Session } from "../../session/session";

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

}
