import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {InstitutionsService} from "../../../../services/institutions/institutions.service";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    form: FormGroup;

    constructor(
        private institutionsService: InstitutionsService,
        private router: Router
    ) {
        this.form = new FormGroup({
            number: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            pid: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        if (this.form.valid) {
            this.institutionsService.createInstitution(this.form.value)
                .pipe(
                    tap(
                        () => this.router.navigate(['/institutions']),
                        (error) => console.log(error)
                    )
                ).subscribe()
        }
    }

}
