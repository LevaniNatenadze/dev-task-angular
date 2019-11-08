import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../../services/users/users.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  updateUserForm: FormGroup;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersService.showUser(this.route.snapshot.params['id']);
    this.updateUserForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      role_id: new FormControl(''),
      password: new FormControl('')
    });
  }

  getUserInfo(id) {
    this.usersService.showUser(id)
      .pipe(
        tap(
          (user: any) => {
            this.id = user.id;
            this.updateUserForm.setValue({
              name: user.name,
              email: user.email,
              role_id: user.role_id,
              password: user.password
            });
          }
        )
      )
      .subscribe()
  }

}
