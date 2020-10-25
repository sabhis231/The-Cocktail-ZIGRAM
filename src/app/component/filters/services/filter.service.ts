import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?';
  
  getCategoriesFilter() {
    return this.http.get(this.baseUrl + 'c=list');
  }
  getGlassesFilter() {
    return this.http.get(this.baseUrl + 'g=list');
  }
  getIngredientsFilter() {
    return this.http.get(this.baseUrl + 'i=list');
  }
  getAlcoholicFilter() {
    return this.http.get(this.baseUrl + 'a=list');
  }
}
