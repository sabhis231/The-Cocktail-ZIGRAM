import { ActionReducerMap } from '@ngrx/store';
import * as fromDashboardState from '../../component/dashboard/store/reducers/dashboad.reducer';
import * as fromFilterState from '../../component/filters/store/reducers/filter.reducer';

export interface AppState {
  filter: fromFilterState.State;
  dahboard: fromDashboardState.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  filter: fromFilterState.filterReducer,
  dahboard: fromDashboardState.dashboardReducer,
};
