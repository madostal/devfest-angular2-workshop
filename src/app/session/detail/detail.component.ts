import {Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from "@angular/forms/src/facade/async";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  @Input() session;
  @Output() onFavoriteClick = new EventEmitter<number>();

  constructor() { }

  onHeaderClick() {
    debugger;
    this.onFavoriteClick.emit(this.session.id);
  }
}
