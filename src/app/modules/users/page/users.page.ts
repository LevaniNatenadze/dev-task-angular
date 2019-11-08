import { Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users/users.service';
import {User} from '../../../interfaces/users/user-auth';
import {map, tap} from 'rxjs/operators';
import {ColumnSetting} from '../../shared/table/model/table.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html'
})
export class UsersPage implements OnInit {
  page: number = 1;
  title = 'Table Example';
  users: User[];
  pages: number[];

  projectSettings: ColumnSetting[] = [
    {
      primaryKey: 'id',
      header: 'Id'
    },
    {
      primaryKey: 'name',
      header: 'Name'
    },
    {
      primaryKey: 'email',
      header: 'Email'
    },
    {
      primaryKey: 'created_at',
      header: 'Created At'
    },
    {
      primaryKey: 'updated_at',
      header: 'Update At'
    }
  ];

  constructor(
    private usersService: UsersService
  ) {
  }

  ngOnInit() {
    this.getUsers();
    console.log(this.pages);
  }

  getPage(i, event) {
    event.preventDefault();
    this.page = i;
    this.getUsers();
  }

  getUsers() {
    return this.usersService.getUsers(this.page)
      .pipe(
        tap(
          (users: any) => {
            this.users = users.data;
          }
        ),
        tap(
          (users: any) => this.getTotalPages(users.last_page)
        )
      )
      .subscribe()
  }

  getTotalPages(totalPages) {
    this.pages = [];
    for (let i = 1; i < totalPages + 1; i++) {
      this.pages.push(i);
    }
  }

}
