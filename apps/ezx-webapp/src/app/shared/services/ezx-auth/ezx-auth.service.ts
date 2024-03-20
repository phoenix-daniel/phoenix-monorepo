import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { IAuth } from '../../../../../../../libs/@types/iauth';
import { SYSTEM } from '../../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class EzxAuthService implements IAuth {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  public getTokenExpirationDate(token: string): Date | null {
    if (token === null || token === '') {
      return null;
    }

    // eslint-disable-next-line prefer-const
    const decoded: JwtPayload = jwtDecode(token)

    if(!Object.prototype.hasOwnProperty.call(decoded, 'exp')) {
      return null
    }

    const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    date.setUTCSeconds(decoded.exp);

    return date;
  }

  public isTokenExpired(token: string, offsetSeconds?: number): boolean {
    const date = this.getTokenExpirationDate(token);
    offsetSeconds = offsetSeconds || 0;

    if (date == null) {
      return false;
    }

    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
  }

  public isLoggedIn(): boolean {
    // read local storage
    const token = localStorage.getItem(SYSTEM.LOCAL_STORAGE_TOKEN_KEY)
    if (token) {
      try {
        if (this.isTokenExpired(token)) {
          localStorage.removeItem(SYSTEM.LOCAL_STORAGE_TOKEN_KEY)
        }
        return !this.isTokenExpired(token)
      } catch (err) {
        // remove invalid token
        localStorage.removeItem(SYSTEM.LOCAL_STORAGE_TOKEN_KEY)
      }
    }
    return false
  }

  public getUserAttribute(attr: string): string {
    if (this.isLoggedIn()) {
      const token = localStorage.getItem(SYSTEM.LOCAL_STORAGE_TOKEN_KEY);
      if (token) {
        const decoded : JwtPayload = jwtDecode(token)
        if(Object.prototype.hasOwnProperty.call(decoded, attr)) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          return decoded[attr]
        }
      }
    }
    return ''
  }

  public getRefreshToken(): string {
    if (this.isLoggedIn()) {
      const token = localStorage.getItem(SYSTEM.LOCAL_STORAGE_TOKEN_KEY);
      return token ? token : '';
    }
    return '';
  }

  public logout(): boolean {
    try {
      localStorage.removeItem(SYSTEM.LOCAL_STORAGE_TOKEN_KEY);
      localStorage.removeItem(SYSTEM.LOCAL_STORAGE_LAST_LOGIN_KEY);
      return true
    } catch (err) {
      return false
    }
  }

}
