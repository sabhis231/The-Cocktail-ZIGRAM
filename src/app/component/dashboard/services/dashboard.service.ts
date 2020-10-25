import { Drink } from './../models/drink.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';
  detailBaseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  getDrinksByFilter(code: string, filterValue: string) {
    return this.http.get<Drink[]>(this.baseUrl + code + '=' + filterValue);
  }

  getDrinkDetailsByDrinkId(drinkId: string) {
    return this.http.get(this.detailBaseUrl + drinkId);
  }
}
