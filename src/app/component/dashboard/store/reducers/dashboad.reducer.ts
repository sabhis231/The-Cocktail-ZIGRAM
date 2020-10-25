import { SetFilter } from './../actions/dashboard.action';
import { Drink } from './../../models/drink.model';
import * as fromDashBoardAction from '../actions/dashboard.action';

export interface State {
  drinks: Drink[];
  setFilterCategory: string;
  setFilterCode: string;
  isLoaded: boolean;
  isLoading: boolean;
  isError: boolean;
  error: string;
}
const initialState: State = {
  drinks: [],
  setFilterCategory: null,
  setFilterCode: null,
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
    case fromDashBoardAction.SET_FILTER:
      return {
        ...state,
        setFilter: action.payload.category,
        setFilterCode: action.payload.code,
        isLoading: true,
        isError: false,
        error: null,
      };
    case fromDashBoardAction.LOAD_DRINKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        drinks: action.payload,
        isError: false,
        error: null,
      };
    case fromDashBoardAction.LOAD_DRINKS_FAILED:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        drinks: [],
        isError: true,
        error: 'Error Occured',
      };
    default:
      return state;
  }
}
