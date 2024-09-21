import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "../shared/components/profile/profile.component";
import { EditProfileComponent } from "../shared/components/edit-profile/edit-profile.component";
import { AddMedicineComponent } from "./components/add-medicine/add-medicine.component";
import { StorageComponent } from "../shared/components/storage/storage.component";
import { ViewCategoryComponent } from "../shared/components/view-category/view-category.component";
import { UpdateCategoryComponent } from "../shared/components/update-category/update-category.component";
import { DetailsMedicineComponent } from "../shared/components/details-medicine/details-medicine.component";

export const ADMIN_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'editProfile', component: EditProfileComponent },
    { path: 'add-medicine', component: AddMedicineComponent },
    { path: 'storage', component: StorageComponent },
    { path: 'view-category', component: ViewCategoryComponent },
    { path: 'update-category', component: UpdateCategoryComponent },
    { path: 'details-medicine/:id', component: DetailsMedicineComponent },
    { path: '**', redirectTo: '', pathMatch: "full" },
];