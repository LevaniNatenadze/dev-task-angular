import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InstitutionsService} from "../../../../services/institutions/institutions.service";
import {tap} from "rxjs/operators";
import {Institutions} from "../../../../interfaces/institutions/institutions";

@Component({
  selector: 'app-show',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.css']
})
export class DetailPage implements OnInit, OnDestroy {

  id: number;
  sub;
  institution: Institutions;

  constructor(
    private activatedRoute: ActivatedRoute,
    private instService: InstitutionsService,
  ) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(
      params => {
        this.id = params.instId;
        this.showInstitution(this.id);
      }
    );
  }

  showInstitution(id) {
    this.instService.showInstitution(id)
      .pipe(
        tap(
          (res) => {
            this.institution = res;
          }
        )

      )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
