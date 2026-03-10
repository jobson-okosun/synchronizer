import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./route/auth.routes') },
    { path: 'app', loadChildren: () => import('./route/dashboard.routes') },
];
