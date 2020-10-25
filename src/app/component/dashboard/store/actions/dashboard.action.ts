import { Drink } from './../../models/drink.model';
import { Action } from '@ngrx/store';

export const LOADING = '[Dashboard] LOADING';
export const SET_FILTER = '[Dashboard] SET FILTER';
export const RESET_FILTER = '[Dashboard] RESET FILTER';
export const LOAD_DRINKS = '[Dashboard] LOAD DRINKS';
export const LOAD_DRINKS_SUCCESS = '[Dashboard] LOAD DRINKS SUCCESS';
export const LOAD_DRINKS_FAILED = '[Dashboard] LOAD DRINKS FAILED';
export class Loading implements Action {
  readonly type = LOADING;
}
export class SetFilter implements Action {
  readonly type = SET_FILTER;
  constructor(public payload: { code: string; category: string }) {}
}
export class ResetFilter implements Action {
  readonly type = RESET_FILTER;
}
export class LoadDrinks implements Action {
  readonly type = LOAD_DRINKS;
}
export class LoadDrinksSuccess implements Action {
  readonly type = LOAD_DRINKS_SUCCESS;
  constructor(public payload: Drink[]) {}
}
export class LoadDrinksFailed implements Action {
  readonly type = LOAD_DRINKS_FAILED;
}

export type DashboardTypes =
  | Loading
  | SetFilter
  | ResetFilter
  | LoadDrinks
  | LoadDrinksSuccess
  | LoadDrinksFailed;
