import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import { UsersPage } from './page/users.page';
import {SharedModule} from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UsersPage,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
