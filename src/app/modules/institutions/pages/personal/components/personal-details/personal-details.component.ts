import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PersonalService} from "../../../../../../services/personal/personal.service";
import {tap} from "rxjs/operators";
import {Personal} from "../../../../../../interfaces/institutions/branches/personal/personal";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  instId: number;
  personalId: number;
  branchId: number;
  person: Personal;

  constructor(
      private personalService: PersonalService,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.instId = this.activatedRoute.snapshot.params.instId;
    this.branchId = this.activatedRoute.snapshot.params.branchId;
    this.personalId = this.activatedRoute.snapshot.params.personId;
    this.getPerson(this.instId, this.branchId, this.personalId);
  }

  getPerson(instId, branchId, personId) {
    this.personalService.showPerson(instId, branchId, personId)
        .pipe(
            tap(
                (res) => {
                    this.person = res;
                }
            )
        )
        .subscribe()
  }

}
