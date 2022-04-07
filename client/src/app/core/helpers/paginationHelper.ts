import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PaginatedResponse } from '../../shared/models/pagination';

export function getPaginatedResponse<T>(url, params, http: HttpClient) {
  var paginatedResponse: PaginatedResponse<T> = new PaginatedResponse<T>();
  return http.get<T>(url, { observe: 'response', params }).pipe(
    map(response => {
      paginatedResponse.items = response.body;
      const pagination = response.headers.get('Pagination')
      if (pagination) {
        paginatedResponse.metaData = JSON.parse(pagination);
      }
      return paginatedResponse;
    })
  );
}

export function getPaginationHeaders(pageNumber: number, pageSize: number) {
  let params = new HttpParams();

  params = params.append('pageNumber', pageNumber.toString());
  params = params.append('pageSize', pageSize.toString());

  return params;
}
