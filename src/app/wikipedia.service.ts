import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';

// interface Car {
//   year: number;
//   color: string;
//   running: boolean;
//   make: {
//     name: string,
//     dateCreated: number;
//   }
// }

// const observable = new Observable<Car>((observer) => {
//   observer.next({
//     year: 2000,
//     color: 'red',
//     running: true,
//     make: {
//       name: 'Chevy',
//       dateCreated: 1950
//     }
//   });
// }).pipe(
//   pluck('make', 'name')
// );

// observable.subscribe(value => {
//   console.log(value);
// })

export interface WikipediaResponse {
  query: {
    search: {
      title: string,
      snipper: string,
      pageid: number
    }[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  // Angular will automatically creates single instace of service.
  constructor(private httpClient: HttpClient) { }

  search(term: string) {
    // https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Nelson%20Mandela&utf8=1&format=json
    return this.httpClient.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php',
      {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*'
        }
      }).pipe(
        pluck('query', 'search')
      );
  }
}
