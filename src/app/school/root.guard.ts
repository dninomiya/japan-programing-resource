import { SCHOOLS } from './../models/schools';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RootGuard implements CanActivate {
  constructor(private router: Router) { }
  schools = SCHOOLS;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (SCHOOLS[0].id) {
      this.router.navigate(['/schools', SCHOOLS[0].id]);
    }
    return true;
  }

}
