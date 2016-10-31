import { Component } from '@angular/core';

const sessions = require('../data/sessions-preview.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 worshop!';

  sessions = sessions;
  session = sessions[2];

  onFavoriteClick(id) {
    console.log('onFavoriteClick', id)
  }
}
