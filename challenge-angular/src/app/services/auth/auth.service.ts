import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiEndpoints } from '../../enums/api-endpoints';
import { UserProfile } from '../../interfaces/user-profile';
import { ApiUrlService } from '../api-url/api-url.service';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token!: unknown;

  constructor(
    private apiUrlService: ApiUrlService,
    private httpService: HttpService
  ) {}
  isUserLoggedIn(): boolean {
    const usr = this.getUserObj();
    return typeof usr === 'object';
  }

  getUserObj(): unknown {
    const token = this.getToken();
    if (typeof token === 'string') {
      const usrResponse = this.getUserAsync(token);
      console.log(usrResponse);
    }
    return null;
  }

  getToken() {
    return this.token || localStorage.getItem('token');
  }

  async getUserAsync(token: string) {
    const resolved = (await new Promise((resolve, reject) => {
      this.getUser(token).subscribe((res) => {
        resolve(res);
      });
    })) as UserProfile;
    console.log('aaaaaaaaaa', resolved);
    return resolved;
  }

  getUser(token: string): Observable<UserProfile> {
    const url = this.apiUrlService.getUrl(ApiEndpoints.PROFILE);
    return this.httpService.get(url, token) as Observable<UserProfile>;
  }
}
