import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public accessToken;

  constructor(private http: HttpClient) {

  }

  doPost(url, postObj): any {
    return this.http.post(environment.apiEndPoint + url, postObj, {
      headers: {
        Authorization: (this.accessToken) ? 'Bearer ' + this.accessToken : '',
        'Access-Control-Allow-Origin': '*'
      },
      responseType: 'json',
    });
  }

  doGet(url, params?): any {
    if (this.accessToken) {
      url += '?access_token=' + this.accessToken;
    }
    if (params) {
      for (const param of params) {
        url += '&' + param.key + '=' + param.value;
      }
    }
    return this.http.get(environment.apiEndPoint + url, {
      headers: {
        Authorization: (this.accessToken) ? 'Bearer ' + this.accessToken : '',
        'Access-Control-Allow-Origin': '*'
      },
      responseType: 'json',
    });
  }

}
