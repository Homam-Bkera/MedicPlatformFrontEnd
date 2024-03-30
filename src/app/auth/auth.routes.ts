import { Routes } from "@angular/router";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { InputCodeComponent } from "./components/input-code/input-code.component";
import { LoginComponent } from "./components/login/login.component";

export const AUTH_ROUTES:Routes =[
    {path:'',component:LoginComponent},
    {path:'register',component:SignInComponent},
    {path:'input-code',component:InputCodeComponent},
    {path:'**',redirectTo:'',pathMatch:"full"},
];