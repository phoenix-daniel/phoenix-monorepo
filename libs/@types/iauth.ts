export interface IAuth {

  /**
   * Get token expiration date
   *
   * @param token
   * @returns {Date}
   */
  getTokenExpirationDate(token: string): Date | null;

  /**
   * To check token expiration
   *
   * @param token
   * @param offsetSeconds
   * @returns {boolean}
   */
  isTokenExpired(token: string, offsetSeconds?: number): boolean;

  /**
   * To check if user already loged in
   *
   * @returns {boolean}
   */
  isLoggedIn(): boolean;

  /**
   * Return user attribute
   *
   * @param attr
   * @returns {any}
   */
  getUserAttribute(attr: string): any;

  /**
   * Return refresh token
   *
   * @returns {string}
   */
  getRefreshToken(): string;

  /**
   * Logout user
   *
   * @returns {boolean}
   */
  logout(): boolean;
}
