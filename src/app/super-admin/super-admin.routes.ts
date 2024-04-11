import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "../shared/components/profile/profile.component";
import { EditProfileComponent } from "../shared/components/edit-profile/edit-profile.component";
import { PageNotFoundComponent } from "../shared/components/page-not-found/page-not-found.component";

export const SUPER_ADMIN_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'editProfile', component: EditProfileComponent },
    { path: '', redirectTo: '', pathMatch: "full" },
    { path: '**', component: PageNotFoundComponent },
];