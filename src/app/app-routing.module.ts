import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SessionListComponent } from "./session/session-list/session-list.component";
import { SessionDetailComponent } from "./session/session-detail/session-detail.component";
import { Error404Component } from "./error/error404/error404.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: '', component: SessionListComponent},
        {path: 'session/:id', component: SessionDetailComponent},
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
