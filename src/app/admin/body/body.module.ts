import { NgModule } from "@angular/core";

// rutas
import { PAGES_ROUTES } from "./body.routes";

// modulo
import { SharedModule } from "../shared/shared.module";

// componentess
import { BodyComponent } from "./body.component";

import { HomePageComponent } from "./home-page/home-page.component";

@NgModule({
  declarations: [
    // componentes
    BodyComponent,
    HomePageComponent
  ],
  exports: [
    // exportacions
    HomePageComponent
  ],
  imports: [
    // modulos
    SharedModule,
    PAGES_ROUTES
  ]
})
export class BodyModule {}
