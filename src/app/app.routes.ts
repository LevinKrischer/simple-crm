import { Dashboard } from './pages/dashboard/dashboard';
import { Users } from './pages/users/users';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: Dashboard},
  {path: 'users', component: Users}
];
