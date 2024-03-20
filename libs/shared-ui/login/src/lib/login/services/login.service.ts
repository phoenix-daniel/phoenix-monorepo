import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoginUsernameType } from '../types/login-username.type';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ApiWithToken } from '../../../../../../@types/api';

@Injectable()
export class LoginService {

  apiLoginUrlDefault = 'http://localhost:3000/fake-api/login'

  constructor (
    private httpClient: HttpClient
  ) { }

  public login(loginData: LoginUsernameType, apiLoginUrl?: string): Observable<ApiWithToken> {
    return this.httpClient.post<ApiWithToken>(apiLoginUrl ? apiLoginUrl : this.apiLoginUrlDefault , loginData, {responseType: 'json', observe: 'response'})
      .pipe(map((response: any) => {
        let token = null;
        if (response.headers.get('Authorization') != null) {
          token = response.headers.get('Authorization').split(' ')[1];
        }
        const resp = response.body;
        resp.tokenInformation = token;

        return resp;
      }))
  }
}


