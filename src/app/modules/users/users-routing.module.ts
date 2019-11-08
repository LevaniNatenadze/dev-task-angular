import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersPage} from './page/users.page';
import {CreateComponent} from './create/create.component';


const routes: Routes = [
  {
    path: '',
    component: UsersPage,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
