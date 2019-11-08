import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {
  Permission: (per: string) => boolean;
  constructor(
    private authService: AuthService
  ) {
    this.Permission = authService.Permission;
  }

  ngOnInit() {
  }

}
