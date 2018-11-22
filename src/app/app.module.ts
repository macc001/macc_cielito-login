import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// rutas
import { AppRoutingModule } from "./app.routes";

// modulo
import { BodyModule } from "./admin/body/body.module";

// componentess
import { AppComponent } from "./app.component";
import { LoginComponent } from "./admin/login/login.component";

@NgModule({
  declarations: [
    // componentes
    AppComponent,
    LoginComponent
  ],
  imports: [
    // modulos
    BrowserModule,
    AppRoutingModule,
    BodyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
