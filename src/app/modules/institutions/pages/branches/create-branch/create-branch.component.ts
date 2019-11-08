import { Component, OnInit } from '@angular/core';
import {BranchesService} from "../../../../../services/branches/branches.service";
import {ActivatedRoute, Router} from "@angular/router";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent implements OnInit {

  instId: number;
  formValue;

  constructor(
      private activatedRoute: ActivatedRoute,
      private branchesService: BranchesService,
      private router: Router
  ) { }

  ngOnInit() {
    this.instId = this.activatedRoute.snapshot.params.instId;
    this.createBranch(this.instId, this.formValue);
  }

  onCreateForm(formValue) {
    this.formValue = formValue
  }

  createBranch(instId, formValue) {
    this.branchesService.createBranch(instId, formValue)
        .pipe(
            tap(
                () => this.router.navigate(['/branches']),
                (err) => console.log(err)
            )
       )
        .subscribe()
  }

}
