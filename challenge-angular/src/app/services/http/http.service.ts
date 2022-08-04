import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  setHeaders(token: string): HttpHeaders {
    const headers = new HttpHeaders();
    headers.set('token', token);
    return headers;
  }

  get(url: string, token: string): Observable<unknown> {
    return this.http.get(url, { headers: this.setHeaders(token) });
  }
}
