import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { StoragesComponent } from "./components/storages/storages.component";
import { CartComponent } from "./components/cart/cart.component";
import { CardComponent } from "./components/card/card.component";
import { AllMedicineComponent } from "./components/all-medicine/all-medicine.component";
import { AllOrdersComponent } from "./components/all-orders/all-orders.component";
import { StoreComponent } from "./components/store/store.component";
import { DetailsCardComponent } from "./components/details-card/details-card.component";
import { DetailsOrderComponent } from "./components/details-order/details-order.component";
import { NotificationComponent } from "../shared/components/notification/notification.component";
import { DetailsNotificationComponent } from "../shared/components/details-notification/details-notification.component";
import { ProfileComponent } from "../shared/components/profile/profile.component";
import { EditProfileComponent } from "../shared/components/edit-profile/edit-profile.component";

export const USERS_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'storages', component: StoragesComponent },
    { path: 'stor', component: StoreComponent },
    { path: 'cart', component: CartComponent },
    { path: 'card', component: CardComponent },
    { path: 'allMedicine', component: AllMedicineComponent },
    { path: 'allMedicine/details/:id', component: DetailsCardComponent },
    { path: 'allOrders', component: AllOrdersComponent },
    { path: 'allOrders/detailsOrder/:order', component: DetailsOrderComponent },
    { path: 'notification', component: NotificationComponent },
    { path: 'notification/:detailsNotification', component: DetailsNotificationComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'editProfile', component: EditProfileComponent },
    { path: '**', redirectTo: '', pathMatch: "full" },
];