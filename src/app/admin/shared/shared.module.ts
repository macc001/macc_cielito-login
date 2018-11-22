import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component";
import { RightSidebarComponent } from "./right-sidebar/right-sidebar.component";
import { NopagefoundComponent } from "../../pages/nopagefound/nopagefound.component";

@NgModule({
  declarations: [
    // declaration
    NopagefoundComponent,
    HeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent
  ],
  exports: [
    // exportando
    NopagefoundComponent,
    HeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent
  ]
})
export class SharedModule {}
