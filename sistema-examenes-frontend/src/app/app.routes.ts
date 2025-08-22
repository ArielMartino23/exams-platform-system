import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup';
import { LoginComponent } from './pages/login/login';
import { HomeComponent } from './pages/home/home';
import { Dashboard } from './pages/admin/dashboard/dashboard';
import { UserDashboard } from './pages/user/user-dashboard/user-dashboard';
import { AdminGuard } from './services/admin-guard';
import { NormalGuard } from './services/normal-guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: Dashboard,
    canActivate: [AdminGuard]
  },
  {
    path: 'user-dashboard',
    component: UserDashboard,
    canActivate: [NormalGuard]
  },
  // Ruta comodín para manejar rutas no encontradas
  {
    path: '**',
    redirectTo: ''
  }
];
