import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class FilmService {
  private url: string = "http://www.omdbapi.com/";
  private apiKey: string = '520bbe17';
  constructor(private http: Http) { }

  private extractListData(res: Response): Array<any> {
    let body = res.json();
    return body.Search || {};
  }

  private extractItemData(res: Response): Array<any> {
    let body = res.json();
    return body || {};
  }

  getFilms(filmName: string, pageNumber: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('apikey', this.apiKey);
    params.set('page', pageNumber || '1');
    params.set('s', filmName);
    return this.http.get(this.url, {search: params}).map(this.extractListData)
      .catch((error: any)=> { return Observable.throw(error);});
  }

  getFilmById (filmId: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('i', filmId);
    params.set('apikey', this.apiKey);
    return this.http.get(this.url, {search: params}).map(this.extractItemData)
      .catch((error: any)=> { return Observable.throw(error);});
  }

//  observableSource = (keyword: any): Observable<any[]> => {
//     let curl: string = 
//       this.url+keyword
//     if (keyword) {
//       return this.http.get(curl)
//         .map(res => {
//           let json = res.json();
//           return json.results;
//         })
//     } else {
//       return Observable.of([]);
//     }
//   }

}
