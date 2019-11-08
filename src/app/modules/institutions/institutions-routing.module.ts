import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstitutionsPage} from './pages/institutions-page/institutions.page';
import {DetailPage} from "./pages/detail/detail.page";
import {BranchesComponent} from "./pages/branches/branches.component";
import {PersonalPage} from "./pages/personal/personal.page";
import {PersonalDetailsComponent} from "./pages/personal/components/personal-details/personal-details.component";
import {CreateComponent} from "./pages/create/create.component";



const routes: Routes = [
  {
    path: '',
    component: InstitutionsPage,
  },
  {
    path: 'detail/:instId',
    component: DetailPage,
  },
  {
    path: 'detail/:instId/branches',
    component: BranchesComponent
  },
  {
    path: 'detail/:instId/branches/:branchId/personal',
    component: PersonalPage
  },
  {
    path: 'detail/:instId/branches/:branchId/personal/:personalId',
    component: PersonalDetailsComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionsRoutingModule {

}
