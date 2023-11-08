import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export enum SearchCategory{
  all = '',
  smartphones = 'smartphones',
  laptops = 'laptops',
  fragrances = 'fragrances',
  skincare = 'skincare',
  groceries = 'groceries',
  home_decoration = 'home-decoration',
  furniture = 'furniture',
  tops = 'tops',
  womens_dresses = 'womens-dresses',
  womens_shoes = 'womens-shoes',
  mens_shirts = 'mens-shirts',
  mens_shoes = 'mens-shoes',
  mens_watches = 'mens-watches',
  womens_watches = 'womens-watches',
  womens_bags = 'womens-bags',
  womens_jewellery = 'womens-jewellery',
  sunglasses = 'sunglasses',
  automotive = 'automotive',
  motorcycle = 'motorcycle',
  lighting = 'lighting'
}

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  url = 'https://dummyjson.com/products/'

  constructor(private http : HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`).pipe(
      map((data: any) => data.products)
    );
  }
  //getAll(title : string/*, category : SearchCategory*/) : Observable<any> {
  //  return this.http.get(`${this.url}search?q=${encodeURI(title)}`);
  //  //return this.http.get(`${this.url}search?q=${encodeURI(title)}&category=${category}`);
  //}

  /*getById(id : any){
    //return this.http.get<any[]>(`${this.url}${id}`);
    return this.http.get<any[]>(`${this.url}`).pipe(
      map((data: any) => data.products.id));
  }*/

  getById(id: any): Observable<any> {
    //const url = `${this.url}/${id}`; // Construa a URL completa com o ID do produto
    return this.http.get<any>(`${this.url}/${id}`);
  }
  
}
