import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@phoenix/footer';
import { LoginComponent } from '@phoenix/login';
import { NcsAuthService } from '../shared/services/ncs-auth/ncs-auth.service';
import { SYSTEM } from '../app.constants';
import { environment } from '../../environments/environment';

@Component({
  selector: 'phoenix-ncs-login',
  standalone: true,
  imports: [CommonModule, FooterComponent, LoginComponent],
  templateUrl: './ncs-login.component.html',
  styleUrl: './ncs-login.component.css',
})
export class NcsLoginComponent implements OnInit {
  isLoggedIn = false
  apiLoginUrl  = environment.baseUrl + '/login'

  constructor(private authService: NcsAuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn()
  }

  protected readonly SYSTEM = SYSTEM;
}
