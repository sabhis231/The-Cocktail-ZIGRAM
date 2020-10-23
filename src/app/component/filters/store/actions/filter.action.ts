import { Action } from '@ngrx/store';

export const LOAD_FILTER = '[filter] LOAD FILTER';

export class LoadFilter implements Action {
  readonly type = LOAD_FILTER;
}

export type FilterTypes = LoadFilter;
