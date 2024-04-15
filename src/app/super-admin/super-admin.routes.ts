import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "../shared/components/profile/profile.component";
import { EditProfileComponent } from "../shared/components/edit-profile/edit-profile.component";
import { PageNotFoundComponent } from "../shared/components/page-not-found/page-not-found.component";
import { CreateAdminsComponent } from "./components/create-admins/create-admins.component";
import { CreateStorageComponent } from "./components/create-storage/create-storage.component";
import { AllStorageComponent } from "./components/all-storage/all-storage.component";
import { UpdateStorageComponent } from "../shared/components/update-storage/update-storage.component";

export const SUPER_ADMIN_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'editProfile', component: EditProfileComponent },
    { path: 'createAdmins', component: CreateAdminsComponent },
    { path: 'createStorage', component: CreateStorageComponent },
    { path: 'allStorage', component: AllStorageComponent },
    { path: 'update/:id', component: UpdateStorageComponent },
    { path: '', redirectTo: '', pathMatch: "full" },
    { path: '**', component: PageNotFoundComponent },
];