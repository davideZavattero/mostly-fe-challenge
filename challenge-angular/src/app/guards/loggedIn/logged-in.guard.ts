import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { firstValueFrom, lastValueFrom, map, Observable } from 'rxjs';
import { Pages } from '../../enums/pages';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  async canActivate(): Promise<boolean | UrlTree> {
    const res = await this.authService.isUserLoggedIn();

    if (await this.authService.isUserLoggedIn()) {
      return true;
    }

    return this.router.parseUrl(`/${Pages.LOGIN}`);
  }
}
