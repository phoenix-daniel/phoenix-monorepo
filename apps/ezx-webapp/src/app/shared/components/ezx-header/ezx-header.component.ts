import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, HeaderMenuType } from '@phoenix/header';
import { EzxAuthService } from '../../services/ezx-auth/ezx-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'phoenix-ezx-header',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './ezx-header.component.html',
  styleUrl: './ezx-header.component.css',
})
export class EzxHeaderComponent {

  appName = 'Ezcap System'
  appMenus: HeaderMenuType[] = [
    {
      name: 'Dashboard',
      routerLink: '/'
    },
    {
      name: 'Statistic',
      routerLink: '/statistic'
    },
    {
      name: 'Payment',
      routerLink: '/payment'
    }
  ]

  constructor(private authService: EzxAuthService,
              private route: Router) {
  }



  logout() {
    this.authService.logout()
    this.route.navigate(['/login'])
  }
}
