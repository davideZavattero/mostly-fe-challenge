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
    console.log('aaaaaaaaa', res);

    if (res) {
      return true;
    }

    this.router.navigateByUrl(`/${Pages.LOGIN}`, { skipLocationChange: true });
    return false;
    // return this.router.parseUrl(`/${Pages.LOGIN}`);
  }
}
