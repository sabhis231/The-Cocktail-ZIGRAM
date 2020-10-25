import { switchMap, catchError, map } from 'rxjs/operators';
import { DashboardService } from './../../services/dashboard.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromDashboardAction from '../actions/dashboard.action';
import { of } from 'rxjs';

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
            return new fromDashboardAction.LoadDrinksSuccess(resData["drinks"]);
          }),
          catchError((error) => {
            return of(new fromDashboardAction.LoadDrinksFailed());
          })
        );
    })
  );
}
