import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAppState from '../../../store/reducers/app.reduce';
import * as fromDahboardActions from '../store/actions/dashboard.action';

@Injectable({
  providedIn: 'root',
})
export class DashboardSandbox {
  constructor(private store: Store<fromAppState.AppState>) {}

  getAllData() {
    return this.store.select('dahboard');
  }

  loadFilteredData(data) {
    this.store.dispatch(new fromDahboardActions.SetFilter(data));
  }
  loadDringDetails(drinkId) {
    this.store.dispatch(new fromDahboardActions.LoadDrinksDetails(drinkId));
  }
}
