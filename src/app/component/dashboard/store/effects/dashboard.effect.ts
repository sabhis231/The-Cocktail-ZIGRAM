import { Drink } from './../../models/drink.model';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromDashboardAction from '../actions/dashboard.action';
import { DashboardService } from './../../services/dashboard.service';

@Injectable()
export class DasboardEffect {
  constructor(
    private action$: Actions,
    private dashboardService: DashboardService
  ) {}

  @Effect()
  loadDrinks = this.action$.pipe(
    ofType(fromDashboardAction.SET_FILTER),
    switchMap((filterData: fromDashboardAction.SetFilter) => {
      return this.dashboardService
        .getDrinksByFilter(filterData.payload.code, filterData.payload.category)
        .pipe(
          map((resData) => {
            return new fromDashboardAction.LoadDrinksSuccess(resData['drinks']);
          }),
          catchError((error) => {
            return of(new fromDashboardAction.LoadDrinksFailed());
          })
        );
    })
  );

  @Effect()
  loadDrinkDetails = this.action$.pipe(
    ofType(fromDashboardAction.LOAD_DRINKS_DETAILS),
    switchMap((payloadData: fromDashboardAction.LoadDrinksDetails) => {
      return this.dashboardService
        .getDrinkDetailsByDrinkId(payloadData.payload)
        .pipe(
          map((resData) => {
            let drink: Drink;
            if (resData) {
              drink = this.convertToObject(resData['drinks'][0]);
            }
            return new fromDashboardAction.LoadDrinksDetailsSuccess(drink);
          }),
          catchError((error) => {
            return of(new fromDashboardAction.LoadDrinksDetailsFailed());
          })
        );
    })
  );

  convertToObject(resData) {
    let drink: Drink = {
      strDrink: resData.strDrink,
      strDrinkThumb: resData.strDrinkThumb,
      idDrink: resData.idDrink,
      strInstructions: resData.strInstructions,
      strInstructionsDE: resData.strInstructionsDE,
      dateModified: resData.dateModified,
    };
    return drink;
  }
}
