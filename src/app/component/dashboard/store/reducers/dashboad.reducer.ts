import * as fromDashBoardAction from '../actions/dashboard.action';

export interface State {
  id: number;
  name: String;
  isLoaded: boolean;
  isLoading: boolean;
  isError: boolean;
  error: string;
}
const initialState: State = {
  id: -1,
  name: null,
  isLoaded: false,
  isLoading: false,
  isError: false,
  error: null,
};

export function dashboardReducer(
  state = initialState,
  action: fromDashBoardAction.DashboardTypes
) {
  switch (action.type) {
    case fromDashBoardAction.LOADING:
      return {
        ...state,
      };
  }
}
