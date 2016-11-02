import {Component, OnInit, Input} from "@angular/core";
import { Session } from "../Session";

const sessions = require("../../../data/sessions-preview.json");

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {

  session: Session = sessions[1];

  constructor() {
  }

  ngOnInit(): void {
    // TODO načtení dat dle id z routeru
  }

  favoriteClickHandler(session: Session) {
    console.log('SessionDetailComponent - favoriteClickHandler', session)
  }
}