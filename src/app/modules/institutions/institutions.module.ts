import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionsPage } from './pages/institutions-page/institutions.page';
import { TableComponent } from './components/table/table.component';
import {MaterialModule} from '../material/material.module';
import {InstitutionsRoutingModule} from './institutions-routing.module';
import {BranchesModule} from "../branches/branches.module";
import { DetailPage } from './pages/detail/detail.page';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BranchesComponent } from './pages/branches/branches.component';
import { PersonalPage } from './pages/personal/personal.page';
import { PersonalDetailsComponent } from './pages/personal/components/personal-details/personal-details.component';
import { CreateComponent } from './pages/create/create.component';
import { CreateBranchComponent } from './pages/branches/create-branch/create-branch.component';
import { UpdateBranchComponent } from './pages/branches/update-branch/update-branch.component';
import { BranchFormComponent } from './pages/branches/branch-form/branch-form.component';




@NgModule({
  declarations: [
      InstitutionsPage,
    TableComponent,
    DetailPage,
    BranchesComponent,
    PersonalPage,
    PersonalDetailsComponent,
    CreateComponent,
    CreateBranchComponent,
    UpdateBranchComponent,
    BranchFormComponent
  ],
    imports: [
        CommonModule,
        InstitutionsRoutingModule,
        MaterialModule,
        BranchesModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class InstitutionsModule { }
