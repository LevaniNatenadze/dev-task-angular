import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InstitutionsService} from "../../../../services/institutions/institutions.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: any[] = [];
  @Input() pagePag: number;

  constructor() { }

  ngOnInit() {}

  columnsToDisplay = [ 'id','name', 'pid', 'number','created_at', 'updated_at', 'actions']

}
