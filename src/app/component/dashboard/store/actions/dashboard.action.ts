import { Action } from '@ngrx/store';
import { Drink } from './../../models/drink.model';

export const LOADING = '[Dashboard] LOADING';
export const SET_FILTER = '[Dashboard] SET FILTER';
export const RESET_FILTER = '[Dashboard] RESET FILTER';
export const LOAD_DRINKS = '[Dashboard] LOAD DRINKS';
export const LOAD_DRINKS_DETAILS = '[Dashboard] LOAD DRINKS DETAILS';
export const LOAD_DRINKS_DETAILS_SUCCESS =
  '[Dashboard] LOAD DRINKS DETAILS SUCCESS';
export const LOAD_DRINKS_DETAILS_FAILED =
  '[Dashboard] LOAD DRINKS DETAILS FAILED';
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

export class LoadDrinksDetails implements Action {
  readonly type = LOAD_DRINKS_DETAILS;
  constructor(public payload: string) {}
}
export class LoadDrinksDetailsSuccess implements Action {
  readonly type = LOAD_DRINKS_DETAILS_SUCCESS;
  constructor(public payload: Drink) {}
}
export class LoadDrinksDetailsFailed implements Action {
  readonly type = LOAD_DRINKS_DETAILS_FAILED;
}

export type DashboardTypes =
  | Loading
  | SetFilter
  | ResetFilter
  | LoadDrinks
  | LoadDrinksSuccess
  | LoadDrinksFailed
  | LoadDrinksDetails
  | LoadDrinksDetailsSuccess
  | LoadDrinksDetailsFailed;
