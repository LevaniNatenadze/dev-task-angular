import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CreateUser, UpdateUser, User} from '../../interfaces/users/user-auth';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];


  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(page: number): Observable<User> {
    return this.httpClient.get<User>(`${environment.baseUrl}/users?page=${page}`)
  }

  createUser(user: CreateUser): Observable<User> {
    return this.httpClient.post<User>(`${environment.baseUrl}/users/create`, user);
  }

  updateUser(userId: number,user: UpdateUser): Observable<User> {
    return this.httpClient.put<User>(`${environment.baseUrl}/users/${userId}`, user)
  }

  showUser(userId: number): Observable<UpdateUser> {
    return this.httpClient.get<UpdateUser>(`${environment.baseUrl}/users/${userId}`)
  }

}
