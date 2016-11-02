import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SessionListComponent } from "./session/session-list/session-list.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: '', component: SessionListComponent}
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
