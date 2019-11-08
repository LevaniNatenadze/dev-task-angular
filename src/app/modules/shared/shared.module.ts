import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLayout } from './table/table.layout';
import { StyleCellDirective } from './table/directive/style-cell.directive';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    TableLayout,
    StyleCellDirective
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule
  ],
  exports: [TableLayout, RouterModule]
})
export class SharedModule { }
