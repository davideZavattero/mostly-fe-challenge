import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  setHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      Token: token,
    });
  }

  get(url: string, token: string): Observable<unknown> {
    return this.http.get(url, { headers: this.setHeaders(token) });
  }
}
