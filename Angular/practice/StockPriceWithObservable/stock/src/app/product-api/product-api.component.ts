import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { fromEvent, map, debounceTime, distinctUntilChanged, switchMap, of, catchError } from 'rxjs';

@Component({
  selector: 'app-product-api',
  standalone: false,
  templateUrl: './product-api.component.html',
  styleUrl: './product-api.component.css'
})
export class ProductApiComponent {
  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    const searchInput = document.getElementById('search');

    if (searchInput) {
      fromEvent(searchInput, 'input').pipe(
        map((event: any) => event.target.value.trim()),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(value => {
          if (!value) {
            console.log("Empty input,skipped request");
            return of([]);
          }

          const apiUrl = `https://dummyjson.com/products/search?q=${value}`;
          console.log('API request', apiUrl);

          return this.http.get(apiUrl).pipe(
            map((response: any) => {
              console.log('API Response', response);
              return response.products || [];
            }),
            catchError(err => {
              console.log('API error', err);
              return of([]);
            })
          );
        })
      ).subscribe(products => {
        console.log('Products:', products);
      });
    }
  }
}
