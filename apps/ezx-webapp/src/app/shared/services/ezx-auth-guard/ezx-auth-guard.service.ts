import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { EzxAuthService } from '../ezx-auth/ezx-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EzxAuthGuardService{
  constructor(private router: Router, private authService: EzxAuthService) {}

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserLogin(next)
  }

  checkUserLogin(route: ActivatedRouteSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      const userGroups = this.authService.getUserAttribute('userGroups')
      const userEntity = this.authService.getUserAttribute('issuer')

      if (( route.data && route.data['groups'] && route.data['groups'].indexOf(userGroups) === -1)
        || (route.data && route.data['entities'] && route.data['entities'].indexOf(userEntity) === -1)) {
        const status = 'access-forbidden'
        const extra = {queryParams :{status: status}}
        this.router.navigate(['/'], extra)

        return false
      }
      return true
    } else {
      localStorage.removeItem('token');
      const currentUrl = this.router.url;
      const status = 'session-expired'
      const extra = {queryParams :{status: status, returnUrl: currentUrl}}
      this.router.navigate(['/login'], extra)

      return false
    }
  }
}
