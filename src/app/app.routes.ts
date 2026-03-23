import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./route/auth.routes') },
    { path: 'app', canActivate: [authGuard], loadChildren: () => import('./route/dashboard.routes') },
];
