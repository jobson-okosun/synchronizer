import { Routes } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadComponent: () => import("../auth/signin/signin") },
    { path: 'signup', loadComponent: () => import("../auth/signup/signup") },
]

export default routes