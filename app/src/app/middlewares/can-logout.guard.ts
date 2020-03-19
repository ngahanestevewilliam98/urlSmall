import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { Admin } from '../models/url';

const STORAGE_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class CanLogoutGuard implements CanActivate {

  user: Admin;

  constructor(public router: Router, @Inject(SESSION_STORAGE) private storage: StorageService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.user = this.storage.get(STORAGE_KEY) || undefined;
    if (this.user) {
      this.router.navigate(['/admin/compte']);
      return true;
    } else {
      return true;
    }
  }

}
