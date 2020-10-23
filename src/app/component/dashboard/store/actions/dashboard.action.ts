import { Action } from '@ngrx/store';

export const LOADING = '[Dashboard] LOADING';

export class Loading implements Action {
  readonly type = LOADING;
}

export type DashboardTypes = Loading;
