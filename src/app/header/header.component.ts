import { User } from './../interfaces/user';
import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sideNav: MatSidenav;

  user$: Observable<User>;

  constructor() { }

  ngOnInit() {
  }

}
