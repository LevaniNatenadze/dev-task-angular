import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  loginError: any = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(formValues) {
    this.loginError = false;
    this.authService.login(formValues)
      .pipe(
        tap(
          () => {
            this.router.navigate(['/institutions']);
          },
          (error) => {
            this.loginError = error;
          }
        )
      )
      .subscribe()
  }

}
