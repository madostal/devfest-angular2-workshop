import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() sessions;

  getSpeakersNames(speakers:any[]) {
    return speakers.map(speaker => speaker.name).join(', ');
  }
}
