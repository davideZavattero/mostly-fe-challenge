import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiEndpoints } from '../../enums/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class ApiUrlService {
  constructor() {}

  getUrl(endpoint: ApiEndpoints, additional?: string): string {
    return (
      `${environment.apiBasePath}/${endpoint}` +
      (additional ? `/${additional}` : '')
    );
  }
}
