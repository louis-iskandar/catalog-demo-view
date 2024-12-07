import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AppService {
  private baseUrl = 'http://localhost:8080';
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
  }

  getProducts(locale: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl +'/products', {headers: this.headers, params: new HttpParams().set('locale', locale)});
  }

  public uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    return this.http.post(this.baseUrl+'/files', formParams)
  }
}
