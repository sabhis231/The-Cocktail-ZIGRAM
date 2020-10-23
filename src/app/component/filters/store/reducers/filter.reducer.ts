import * as fromFilterActions from '../actions/filter.action';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  isError: boolean;
  error: null;
  filter: [];
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
    case fromFilterActions.LOAD_FILTER:
      return {
        ...state,
      };
  }
}
