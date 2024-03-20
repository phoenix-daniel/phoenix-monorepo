import { Route } from '@angular/router';
import { NcsAuthGuardService } from './shared/services/ncs-auth-guard/ncs-auth-guard.service';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./ncs-dashboard/ncs-dashboard.component').then((m) => m.NcsDashboardComponent),
    canActivate: [NcsAuthGuardService],
    data: {
      entities: ['ALLIANZ-LIFE'],
      groups: ['USER', 'SUPPORT', 'ADMIN']
    }
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./ncs-news/ncs-news.component').then((m) => m.NcsNewsComponent),
    canActivate: [NcsAuthGuardService],
    data: {
      entities: ['ALLIANZ-LIFE'],
      groups: ['USER', 'SUPPORT', 'ADMIN']
    }
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./ncs-login/ncs-login.component').then((m) => m.NcsLoginComponent)
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];
