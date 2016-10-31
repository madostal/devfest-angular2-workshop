import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

import {DetailComponent} from "./session/detail/detail.component";
import {ListComponent} from "./session/list/list.component";
import {Error404Component} from "./error/error404/error404.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: 'session/:id', component: DetailComponent},
        {path: '', component: ListComponent},
        {path: '**', component: Error404Component},
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
