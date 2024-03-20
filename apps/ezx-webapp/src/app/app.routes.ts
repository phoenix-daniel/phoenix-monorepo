import { Route } from '@angular/router';
import { EzxAuthGuardService } from './shared/services/ezx-auth-guard/ezx-auth-guard.service';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./ezx-dashboard/ezx-dashboard.component').then((m) => m.EzxDashboardComponent),
    canActivate: [EzxAuthGuardService],
    data: {
      entities: ['ALLIANZ-LIFE'],
      groups: ['USER', 'SUPPORT', 'ADMIN']
    }
  },
  {
    path: 'statistic',
    loadComponent: () =>
      import('./ezx-statistic/ezx-statistic.component').then((m) => m.EzxStatisticComponent),
    canActivate: [EzxAuthGuardService],
    data: {
      entities: ['ALLIANZ-LIFE'],
      groups: ['USER', 'SUPPORT', 'ADMIN']
    }
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('./ezx-payment/ezx-payment.component').then((m) => m.EzxPaymentComponent),
    canActivate: [EzxAuthGuardService],
    data: {
      entities: ['ALLIANZ-LIFE'],
      groups: ['USER', 'SUPPORT','ADMIN']
    }
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./ezx-login/ezx-login.component').then((m) => m.EzxLoginComponent)
  },
  {
    path: '**',
    redirectTo: 'login',
  }

]
