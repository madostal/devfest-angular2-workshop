import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 worshop!';

  session = {
    "id": 400,
    "title": "REST API je mrtvé, ať žije GraphQL",
    "description": "REST se stal standardem pro API. Poslední dobou se ale ukazuje, že není vhodné pro uživatelské rozhraní. Facebook nám nabídl GraphQL a skvělou knihovnu Relay, která usnadňuje a zrychluje práci s daty v aplikacích. ",
    "speakers": [
      {
        "id": 6,
        "featured": false,
        "name": "Petr Ferschmann",
        "company": "puzzlette",
        "country": "Pilsen, Czech Republic",
        "photoUrl": "/images/people/petr_fershmann.jpg",
        "shortBio": "Co-founded and operated cloud based accounting system ABRA @FlexiBee. Loves backend and so he is involved in @fnxio. Now he's starting a new project.",
        "bio": "Co-founded and operated cloud based accounting system ABRA @FlexiBee. Loves backend and so he is involved in @fnxio. Now he's starting a new project.",
        "tags": [
          "Backend",
          "REST API",
          "GraphQL"
        ],
        "badges": [],
        "socials": [
          {
            "icon": "twitter",
            "name": "Twitter",
            "link": "https://twitter.com/fersman"
          },
          {
            "icon": "website",
            "name": "Website",
            "link": "http://www.ferschmann.cz"
          },
          {
            "icon": "linkedin",
            "name": "LinkedIn",
            "link": "https://linkedin.com/in/fersman"
          }
        ]
      }
    ],
    "language": "Czech",
    "complexity": "Advanced",
    "tags": [
      "Backend",
      "Web",
      "GraphQL",
      "REST API"
    ]
  }
}
