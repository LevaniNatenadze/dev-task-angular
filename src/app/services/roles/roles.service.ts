import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserRoles} from '../../interfaces/users/user-auth';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getRoles(): Observable<UserRoles> {
    return this.httpClient.get<UserRoles>(`${environment.baseUrl}/roles`);
  }

}
