import {Component, OnInit, Input} from '@angular/core';
import {SessionDataService} from "../session-data.service";
import {Session} from "../Session";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  sessions: Session[];

  constructor(private dataService: SessionDataService) {
  }

  ngOnInit(): void {
    this.dataService.getList()
      .then(sessions => this.sessions = sessions);
  }

  getSpeakersNames(speakers: any[]) {
    if (!speakers) {
      return "";
    }

    return speakers.map(speaker => speaker.name).join(', ');
  }
}
