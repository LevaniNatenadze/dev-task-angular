import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ColumnSetting} from './model/table.model';
import {ColumnMap} from './model/columnmap';
import {UsersService} from '../../../services/users/users.service';
import {map, tap} from 'rxjs/operators';



@Component({
  selector: 'app-table',
  templateUrl: './table.layout.html'
})
export class TableLayout implements OnInit, OnChanges {
  @Input() contents: any[];
  @Input() settings: ColumnSetting[];


  columnMaps: ColumnMap[];

  constructor() {}


  ngOnInit() {}


  ngOnChanges() {
    if (this.settings) {
      this.columnMaps = this.settings
        .map( col => new ColumnMap(col) );
    } else {
      this.columnMaps = Object.keys(this.contents[0])
        .map( key => {
          return new ColumnMap( { primaryKey: key });
        });
    }

  }
}

