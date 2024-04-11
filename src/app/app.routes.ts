import { Routes } from '@angular/router';
import { authUserGuard } from './auth/guards/auth-user.guard';
import { authAdminGuard } from './auth/guards/auth-admin.guard';
import { authSuperAdminGuard } from './auth/guards/auth-super-admin.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { auth } from './auth/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(r => r.AUTH_ROUTES),
        canActivate: [auth],
    },
    {
        path: 'user',
        loadChildren: () => import('./users/users.routes').then(r => r.USERS_ROUTES),
        canActivate: [authUserGuard],
    },
    {
        path: 'admin',
        loadChildren: () => import('./admins/admins.routes').then(r => r.ADMIN_ROUTES),
        canActivate: [authAdminGuard],
    },
    {
        path: 'superAdmin',
        loadChildren: () => import('./super-admin/super-admin.routes').then(r => r.SUPER_ADMIN_ROUTES),
        canActivate: [authSuperAdminGuard],
    },
    { path: "", redirectTo: 'auth', pathMatch: 'full' },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
