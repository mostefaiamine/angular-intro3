import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CountryService {
    constructor(private $http: HttpClient) {

    }

    getData(): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.append('x-rapidapi-host', 'restcountries-v1.p.rapidapi.com');
        headers = headers.append('x-rapidapi-key', 'd8b69ce868mshe1883fd24db3134p143b34jsn40307eef82ad');
        return this.$http.get('https://restcountries-v1.p.rapidapi.com/all', { headers });
    }
}
