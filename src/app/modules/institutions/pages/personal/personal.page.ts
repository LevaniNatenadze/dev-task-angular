import {Component, OnDestroy, OnInit} from '@angular/core';
import {Personal} from "../../../../interfaces/institutions/branches/personal/personal";
import {ActivatedRoute} from "@angular/router";
import {PersonalService} from "../../../../services/personal/personal.service";
import {tap} from "rxjs/operators";
import {BranchesService} from "../../../../services/branches/branches.service";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./persona.page.css']
})
export class PersonalPage implements OnInit {

  instId: number;
  branchId: number;
  personal: Personal[] = [];


  constructor(
      private personalService: PersonalService,
      private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.instId = this.activatedRoute.snapshot.params.instId;
    this.branchId = this.activatedRoute.snapshot.params.branchId;
    this.getPersonal(this.instId, this.branchId);
  }

  getPersonal(instId, branchId) {
    this.personalService.getPersonal(instId, branchId)
        .pipe(
            tap(
                (res) => {
                  this.personal = res['data']
                }
            )
        )
        .subscribe()
  }


}
