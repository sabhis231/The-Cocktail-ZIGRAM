import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAppState from '../../../store/reducers/app.reduce';
import * as fromFilterAction from '../store/actions/filter.action';

@Injectable({
  providedIn: 'root',
})
export class FilterSandbox {
  constructor(private store: Store<fromAppState.AppState>) {}

  getAllFilter() {
    return this.store.select('filter');
  }

  fetchAllFilter() {
    return this.store.dispatch(new fromFilterAction.LoadAllFilter());
  }
}
