import {
  SetFilter,
  LOAD_DRINKS_DETAILS,
  LOAD_DRINKS_DETAILS_SUCCESS,
} from './../actions/dashboard.action';
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
  selectedDrinkId: string;
  drinkDetailsLoading: boolean;
  drinkDetailsLoaded: boolean;
  selectedDrinkDetails: Drink;
  isErrorDrinkDetails: boolean;
}
const initialState: State = {
  drinks: [],
  setFilterCategory: null,
  setFilterCode: null,
  isLoaded: false,
  isLoading: false,
  isError: false,
  error: null,
  selectedDrinkId: null,
  drinkDetailsLoading: false,
  drinkDetailsLoaded: false,
  selectedDrinkDetails: null,
  isErrorDrinkDetails: false,
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
    case fromDashBoardAction.LOAD_DRINKS_DETAILS:
      return {
        ...state,
        selectedDrinkId: action.payload,
        selectedDrinkDetails: null,
        isErrorDrinkDetails: false,
        drinkDetailsLoading: true,
        drinkDetailsLoaded: false,
      };
    case fromDashBoardAction.LOAD_DRINKS_DETAILS_SUCCESS:
      return {
        ...state,
        selectedDrinkDetails: action.payload,
        isErrorDrinkDetails: false,
        drinkDetailsLoading: false,
        drinkDetailsLoaded: true,
      };
    case fromDashBoardAction.LOAD_DRINKS_DETAILS_FAILED:
      return {
        ...state,
        selectedDrinkDetails: null,
        isErrorDrinkDetails: true,
        drinkDetailsLoading: false,
        drinkDetailsLoaded: true,
      };
    default:
      return state;
  }
}
