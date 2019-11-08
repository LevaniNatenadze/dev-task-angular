import {Inject, Injectable} from '@angular/core';
import {API_BASE_URL, MY_TOKEN} from '../auth/token';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from './local-storage.service';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {User, UserAuth, UserPermission, UserRoles} from '../interfaces/users/user-auth';
import {Token} from '../interfaces/token-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl;
  user: User;
  private _token: string;

  constructor(
    @Inject(API_BASE_URL) private baseUrl: string,
    @Inject(MY_TOKEN) private tokenKy: string,
    private httpClient: HttpClient,
    private localStorage: LocalStorageService,
    private router: Router
  ) {
    this.loginUrl = `${baseUrl}/login`;


    this.token = this.localStorage.getToken(this.tokenKy);
  }

  set token(value: string) {
    this._token = value;
    this.localStorage.setToken(this.tokenKy, value);
  }

  get token() {
    return this._token;
  }

  login(user: UserAuth): Observable<Token> {
      debugger
    return this.httpClient.post<Token>(this.loginUrl, user)
      .pipe(
       tap(
         (res) => this.token = res.token
       )
      );
  }

  get getUser(): Observable<User> {
    if (this.user) {
      return of(this.user);
    }
    return this.fetchUser();
  }

  fetchUser(): Observable<User> {
    return this.httpClient
      .get<{user: User}>(`${environment.baseUrl}/user`)
      .pipe(
        map(
          (response: {user: User}) => response.user
        ),
        map(
          (user: User) => {
            const userRoles = user.roles
              .map(role => role.permissions);
            const permissions: string[] = userRoles
              .reduce<string[]>(
                (acc, next: UserPermission[]) => {
                  const strings = next.map(permission => permission.name);
                  const newAcc = [
                    ...acc,
                    ...strings
                  ];
                  return newAcc;
                }
                , []);

            user.permissions = new Set<string>(permissions);
            return user;
          }
        )
      );
  }

  Permission = (per: string) => {
    if( !this.user || !this.user.permissions) {
      return true;
    }
    return this.user.permissions.has(per);
  };


  get logOut() {
    this.localStorage.clearToken();
    this.token = '';
    this.router.navigate(['/login']);
    return true;
  }

}
