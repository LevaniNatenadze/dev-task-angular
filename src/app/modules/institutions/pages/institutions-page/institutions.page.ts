import {Component, OnDestroy, OnInit} from '@angular/core';
import {InstitutionsService} from '../../../../services/institutions/institutions.service';
import {tap} from 'rxjs/operators';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.page.html',
  styleUrls: ['./institutions.page.css']
})
export class InstitutionsPage implements OnInit {


  institutions: any = { data: [] };
  pages: number[] = [];

  ngOnInit() {
    this.getInstitutions(1);
  }

  constructor(
    private route: ActivatedRoute,
    private institutionsService: InstitutionsService
  ) {
  }

  getInstitutions(page) {
    this.institutionsService.getInstitutions(page)
      .pipe(
        tap(
          (inst) => this.institutions = inst
        ),
        tap(
          (inst: any) => this.totalPages(inst.last_page)
        )
      )
      .subscribe();
  }


  totalPages(totalPage) {
    this.pages = [];
    for (let i = 1; i <= totalPage; i++) {
      this.pages.push(i);
    }
  }

}


