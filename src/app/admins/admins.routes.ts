import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

export const ADMIN_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '', pathMatch: "full" },
];