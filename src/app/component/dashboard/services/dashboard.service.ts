import { Drink } from './../models/drink.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';

  getDrinksByFilter(code: string, filterValue: string) {
    return this.http.get<Drink[]>(this.baseUrl + code + '=' + filterValue);
  }
}
