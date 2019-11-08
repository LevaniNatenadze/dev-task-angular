import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {

  @Output() formValue = new EventEmitter();
  branchForm: FormGroup;

  constructor() {
    this.branchForm = new FormGroup({
      address: new FormControl('', Validators.required),
      manager_name: new FormControl('', Validators.required)
    })
  }


  ngOnInit() {
  }

  createBranch() {
    if (this.branchForm.valid) {
      this.formValue.emit(this.branchForm.value);
    }
  }



}
