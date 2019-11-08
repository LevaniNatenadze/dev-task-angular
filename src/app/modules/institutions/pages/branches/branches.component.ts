import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BranchesService} from "../../../../services/branches/branches.service";
import {InstitutionsService} from "../../../../services/institutions/institutions.service";
import {pipe} from "rxjs";
import {tap} from "rxjs/operators";
import {Branches} from "../../../../interfaces/institutions/branches/branches";

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit, OnDestroy {

  instId: number;
  branches: Branches[] = [];
  sub;

  constructor(
      private branchesService: BranchesService,
      private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(
        params => {
          this.instId = params.instId;
          this.getAllBranches(this.instId);
        }
    );
  }

  getAllBranches(id) {
    this.branchesService.getBranches(id)
        .pipe(
            tap(
                (res) => {
                  this.branches = res['data']
                }
            )
        )
        .subscribe()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
