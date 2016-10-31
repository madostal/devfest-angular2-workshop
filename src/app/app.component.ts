import { Component } from '@angular/core';

const sessions = require('../data/sessions-preview.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sessions = sessions;
  session = sessions[0];

  onFavoriteClick(id) {
    console.log('onFavoriteClick', id)
  }
}
