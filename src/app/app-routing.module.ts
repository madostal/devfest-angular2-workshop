import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./error/error404/error404.component";
import {SessionDetailComponent} from "./session/session-detail/session-detail.component";
import {SessionListComponent} from "./session/session-list/session-list.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: 'session/:id', component: SessionDetailComponent},
        {path: '', component: SessionListComponent},
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
