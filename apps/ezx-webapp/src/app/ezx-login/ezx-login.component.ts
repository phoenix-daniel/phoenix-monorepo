import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@phoenix/login';
import { EzxAuthService } from '../shared/services/ezx-auth/ezx-auth.service';
import { FooterComponent } from '@phoenix/footer';
import { SYSTEM } from '../app.constants';
import { environment } from '../../environments/environment';

@Component({
  selector: 'phoenix-ezx-login',
  standalone: true,
  imports: [CommonModule, LoginComponent, FooterComponent],
  templateUrl: './ezx-login.component.html',
  styleUrl: './ezx-login.component.css',
})
export class EzxLoginComponent implements OnInit{

  isLoggedIn  = false
  apiLoginUrl  = environment.baseUrl + '/login'

  constructor(private authService: EzxAuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn()
  }

  protected readonly SYSTEM = SYSTEM;
}
