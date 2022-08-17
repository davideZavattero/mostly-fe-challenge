import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  first,
  firstValueFrom,
  lastValueFrom,
  map,
  Observable,
  of,
} from 'rxjs';
import { ApiEndpoints } from '../../enums/api-endpoints';
import {
  HttpLoginData,
  HttpLoginDataResponse,
} from '../../interfaces/http-login-data';
import { UserProfile, UserProfileFull } from '../../interfaces/user-profile';
import { ApiUrlService } from '../api-url/api-url.service';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token!: unknown;
  private usrData!: UserProfileFull;

  private _usrObjectSubject: BehaviorSubject<UserProfileFull> =
    new BehaviorSubject({} as UserProfileFull);

  constructor(
    private apiUrlService: ApiUrlService,
    private httpService: HttpService
  ) {}

  async isUserLoggedIn(): Promise<boolean> {
    const token = this.getToken();
    if (token) {
      if (await this.checkUser()) {
        return Promise.resolve(true);
      }
      try {
        const usr = await firstValueFrom(
          this.getUser(token as string).pipe(first())
        );
        if (usr.name) {
          this.setUserObj(usr, token as string);
          return Promise.resolve(true);
        }
      } catch (error) {
        console.warn(error);
        return Promise.resolve(false);
      }
    }
    return Promise.resolve(false);
  }
  async checkUser(): Promise<boolean> {
    return await firstValueFrom(
      this.getUserObj().pipe(
        first(),
        map((el) => {
          return !!el.name;
        })
      )
    );
  }

  getUserObj(): Observable<UserProfileFull> {
    return this._usrObjectSubject.asObservable();
  }
  setUserObj(usrData: UserProfile, token: string): void {
    this._usrObjectSubject.next({ token, ...usrData });
  }

  getToken(): unknown {
    return this.token || localStorage.getItem('token');
  }

  getUser(token: string): Observable<UserProfile> {
    const url = this.apiUrlService.getUrl(ApiEndpoints.PROFILE);
    return this.httpService.get(url, token) as Observable<UserProfile>;
  }

  async checkLogin(data: HttpLoginData) {
    const url = this.apiUrlService.getUrl(ApiEndpoints.AUTH);
    const result = (await firstValueFrom(
      this.httpService.post(url, data)
    )) as HttpLoginDataResponse;
    const user = await firstValueFrom(this.getUser(result.token));
    this.setUserObj(user, result.token);
    return { ...user, token: result.token };
  }

  logUserIn(data: HttpLoginData) {
    return new Observable((ret) => {
      this.checkLogin(data)
        .then((res) => {
          ret.next(res);
        })
        .catch((error) => {
          ret.error(error);
        });
    });
  }
}
