import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersService} from '../../../services/users/users.service';
import {map, tap} from 'rxjs/operators';


@Component({
  selector: 'create-user',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    role_id: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

  createUser() {
    this.usersService.createUser(this.userForm.value)
      .subscribe((data) => {
        console.log(data);
          this.router.navigate(['/users'])
        }
      )
  }

}
