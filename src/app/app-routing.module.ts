import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './layout/main/main.layout';
import {AuthGuard} from './guards/auth.guard';
import {EmptyLayout} from './layout/empty/empty.layout';
import {UserGuard} from './guards/user/user.guard';
import {NotFoundComponent} from './layout/404/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: 'institutions',
        loadChildren: './modules/institutions/institutions.module#InstitutionsModule'
      },
      {
        path: 'users',
        loadChildren: './modules/users/users.module#UsersModule',
        canActivate: [UserGuard]
      }
    ]
  },
  {
    path: '',
    component: EmptyLayout,
    children: [
      {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
