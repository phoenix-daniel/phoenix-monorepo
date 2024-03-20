import { LoginUsernameType } from '../types/login-username.type';
import { Validators } from '@angular/forms';

export class LoginUsernameModel {
  loginData: LoginUsernameType

  // Define initial state
  initialState: LoginUsernameType = {
    username: '',
    password: ''
  }
  constructor(loginInput?: LoginUsernameType) {
    this.loginData = loginInput ? loginInput : this.initialState;
    return this.validation();
  }

  validation(): any {
    return {
      username: [this.loginData.username, Validators.compose([Validators.required])],
      password: [this.loginData.password, Validators.compose([Validators.required])],
    }
  }
}
