import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { delay } from 'rxjs';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxErrorModule } from '@aposin/ng-aquila/base';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';
import { LoginService } from './services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUsernameType } from './types/login-username.type';
import { LoginUsernameModel } from './models/login-username.model';

@Component({
  selector: 'phoenix-login',
  standalone: true,
  imports: [CommonModule, NxButtonModule, NxErrorModule, NxFormfieldModule, NxGridModule, NxInputModule, NxSpinnerModule, ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  @Input() isLoggedIn = false
  @Input() apiLoginUrl = ''
  @Input() localStorageTokenKey = ''
  @Input() localStorageLastLoginKey = ''

  isLoading = false
  ntfEnable = false
  ntfType = ''
  returnUrl = ''
  status = ''

  loginForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.initialModel()
    this.isUserLogin()
  }

  initialModel(login?: LoginUsernameType) {
    const loginModel = new LoginUsernameModel(login)
    this.loginForm = this.formBuilder.group(loginModel)

    this.status = this.activatedRoute.snapshot.queryParams['status']
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl']
  }

  isUserLogin() {
    if (this.isLoggedIn) {
      this.navigateUrl(this.returnUrl)
    }

    if (this.status) {
      if (this.status === 'session-expired') {
        this.showNtf('errorSessionExpired')
      }
    }
  }

  login() {
    this.showNtf()
    this.isLoading = true
    const rawData = this.loginForm.getRawValue()

    this.loginService.login(rawData, this.apiLoginUrl)
      .pipe(delay(2000))
      .subscribe({
        next: data => {
          if (data.tokenInformation) {
            localStorage.setItem(this.localStorageTokenKey, JSON.parse(JSON.stringify(data.tokenInformation)))
            localStorage.setItem(this.localStorageLastLoginKey, data.replyMessage.lastLoginTime)
            this.navigateUrl(this.returnUrl)
          } else {
            this.showNtf('errorLogin')
          }
        },
        error: () =>  {
          this.showNtf('errorLogin')
          this.isLoading = false
        },
        complete: ()=> {
          this.isLoading = false
        },
      })
  }

  navigateUrl(url?: string) {
    const dashboardPath = '/'
    this.router.navigate([url ? url : dashboardPath])
  }

  showNtf(ntfType?: string) {
    this.ntfEnable = ntfType !== undefined
    this.ntfType = ntfType ? ntfType : '';
  }

}
