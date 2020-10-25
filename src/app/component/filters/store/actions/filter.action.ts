import { FilterCategory } from './../../models/filterCategory.model';
import { Action } from '@ngrx/store';

export const LOAD_ALL_FILTER = '[filter] LOAD ALL FILTER';
export const LOAD_CATEGORY_FILTER = '[filter] LOAD CATEGORY FILTER';
export const LOAD_GLASS_FILTER = '[filter] LOAD GLASS FILTER';
export const LOAD_INGREDIENT_FILTER = '[filter] LOAD INGREDIENT FILTER';
export const LOAD_ALCOHOLIC_FILTER = '[filter] LOAD ALCOHOLIC FILTER';
export const LOAD_ERROR = '[filter] LOAD ERROR';

export class LoadAllFilter implements Action {
  readonly type = LOAD_ALL_FILTER;
}
export class LoadCategoryFilter implements Action {
  readonly type = LOAD_CATEGORY_FILTER;
  constructor(public payload: FilterCategory) {}
}
export class LoadGlassFilter implements Action {
  readonly type = LOAD_GLASS_FILTER;
  constructor(public payload: FilterCategory) {}
}
export class LoadIngredientFilter implements Action {
  readonly type = LOAD_INGREDIENT_FILTER;
  constructor(public payload: FilterCategory) {}
}

export class LoadAlcoholicFilter implements Action {
  readonly type = LOAD_ALCOHOLIC_FILTER;
  constructor(public payload: FilterCategory) {}
}
export class LoadError implements Action {
  readonly type = LOAD_ERROR;
}

export type FilterTypes =
  | LoadAllFilter
  | LoadCategoryFilter
  | LoadGlassFilter
  | LoadIngredientFilter
  | LoadAlcoholicFilter
  | LoadError;
