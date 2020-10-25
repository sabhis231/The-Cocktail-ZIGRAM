import {
  LoadGlassFilter,
  LoadIngredientFilter,
  LOAD_ALCOHOLIC_FILTER,
} from './../actions/filter.action';
import { Filters } from './../../models/filters.model';
import { Filter } from './../../models/filter.model';
import { FilterCategory } from './../../models/filterCategory.model';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { FilterService } from '../../services/filter.service';
import * as fromFilterActions from '../actions/filter.action';

@Injectable()
export class FilterEffects {
  constructor(private action$: Actions, private filterService: FilterService) {}

  @Effect()
  fetchFilter = this.action$.pipe(
    ofType(fromFilterActions.LOAD_ALL_FILTER),
    switchMap(() => {
      let filters: FilterCategory[] = [];
      return this.filterService.getCategoriesFilter().pipe(
        map((resData) => {
          let modelData = this.modelInit(
            resData,
            'Category',
            'strCategory',
            'c'
          );

          filters.push(modelData);
          console.log(filters);

          return new fromFilterActions.LoadCategoryFilter(modelData);
        }),
        catchError((error) => {
          return of(new fromFilterActions.LoadError());
        })
      );
    })
  );

  @Effect()
  fetchGlassFilter = this.action$.pipe(
    ofType(fromFilterActions.LOAD_CATEGORY_FILTER),
    switchMap(() => {
      let filters: FilterCategory[] = [];
      return this.filterService.getGlassesFilter().pipe(
        map((resData) => {
          let modelData = this.modelInit(resData, 'Glass', 'strGlass', 'g');

          filters.push(modelData);
          console.log(filters);

          return new fromFilterActions.LoadGlassFilter(modelData);
        }),
        catchError((error) => {
          return of(new fromFilterActions.LoadError());
        })
      );
    })
  );

  @Effect()
  fetchIngredFilter = this.action$.pipe(
    ofType(fromFilterActions.LOAD_GLASS_FILTER),
    switchMap(() => {
      let filters: FilterCategory[] = [];
      return this.filterService.getIngredientsFilter().pipe(
        map((resData) => {
          let modelData = this.modelInit(
            resData,
            'Ingred',
            'strIngredient1',
            'i'
          );

          filters.push(modelData);
          console.log(filters);

          return new fromFilterActions.LoadIngredientFilter(modelData);
        }),
        catchError((error) => {
          return of(new fromFilterActions.LoadError());
        })
      );
    })
  );
  @Effect()
  fetchAlchoFilter = this.action$.pipe(
    ofType(fromFilterActions.LOAD_INGREDIENT_FILTER),
    switchMap(() => {
      let filters: FilterCategory[] = [];
      return this.filterService.getAlcoholicFilter().pipe(
        map((resData) => {
          let modelData = this.modelInit(
            resData,
            'Alchol',
            'strAlcoholic',
            'a'
          );

          filters.push(modelData);
          console.log(filters);

          return new fromFilterActions.LoadAlcoholicFilter(modelData);
        }),
        catchError((error) => {
          return of(new fromFilterActions.LoadError());
        })
      );
    })
  );

  modelInit(dataArray, type, ingCode, filterCode) {
    var data: { name: string }[] = [];
    for (let item of dataArray['drinks']) {
      data.push({ name: item[ingCode] });
    }
    var filter: Filter = {
      name: type,
      ingCode: ingCode,
      ingFilterCode: filterCode,
    };
    var modelData: FilterCategory = {
      filter: filter,
      filterCategoryNames: data,
    };
    // console.log(modelData);
    return modelData;
  }
}
