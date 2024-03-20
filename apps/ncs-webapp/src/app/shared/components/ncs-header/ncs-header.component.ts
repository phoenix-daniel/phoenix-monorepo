import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, HeaderMenuType } from '@phoenix/header';
import { Router } from '@angular/router';
import { NcsAuthService } from '../../services/ncs-auth/ncs-auth.service';

@Component({
  selector: 'phoenix-ncs-header',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './ncs-header.component.html',
  styleUrl: './ncs-header.component.css',
})
export class NcsHeaderComponent {

  appName = 'NCS System'
  appMenus: HeaderMenuType[] = [
    {
      name: 'Dashboard',
      routerLink: '/'
    },
    {
      name: 'News',
      routerLink: 'news'
    }
  ]

  constructor(private authService: NcsAuthService,
              private route: Router) {
  }

  logout() {
    this.authService.logout()
    this.route.navigate(['/login'])
  }
}
