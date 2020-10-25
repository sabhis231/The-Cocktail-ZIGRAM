import * as fromFilterActions from '../actions/filter.action';
import { FilterCategory } from './../../models/filterCategory.model';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  isError: boolean;
  error: null;
  filter: FilterCategory[];
}

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  isError: false,
  error: null,
  filter: [],
};

export function filterReducer(
  state = initialState,
  action: fromFilterActions.FilterTypes
) {
  switch (action.type) {
    case fromFilterActions.LOAD_ALL_FILTER:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
      };
    case fromFilterActions.LOAD_CATEGORY_FILTER:
      return {
        ...state,
        filter: [...state.filter, action.payload],
      };
    case fromFilterActions.LOAD_GLASS_FILTER:
      return {
        ...state,
        filter: [...state.filter, action.payload],
      };
    case fromFilterActions.LOAD_INGREDIENT_FILTER:
      return {
        ...state,
        filter: [...state.filter, action.payload],
      };
    case fromFilterActions.LOAD_ALCOHOLIC_FILTER:
      return {
        ...state,
        filter: [...state.filter, action.payload],
      };
    default:
      return state;
  }
}
