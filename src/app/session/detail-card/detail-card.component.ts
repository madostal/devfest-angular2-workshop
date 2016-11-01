import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Session } from "../Session";

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {

  constructor() {
  }

  @Input() session: Session;
  @Output() onFavoriteClick = new EventEmitter<number>();

  onHeaderClick() {
    this.onFavoriteClick.emit(this.session.id);
  }
}
