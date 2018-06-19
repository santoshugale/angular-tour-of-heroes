import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardGuard implements CanActivate {

  public constructor(private loginService: LoginService,
    private router: Router) { }

  public canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot, ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.loggedIn) return true;
    else this.router.navigateByUrl('/login');
    return false;
  }

}
