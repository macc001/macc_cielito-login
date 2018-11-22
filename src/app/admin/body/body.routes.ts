import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./home-page/home-page.component";
import { BodyComponent } from "./body.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: BodyComponent,
    children: [
      { path: "home", component: HomePageComponent },
      { path: "", redirectTo: "/home", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
