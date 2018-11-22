import { Routes, RouterModule } from "@angular/router";

import { NopagefoundComponent } from "./pages/nopagefound/nopagefound.component";
import { LoginComponent } from "./admin/login/login.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "**", component: NopagefoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes, {
  useHash: true
});
