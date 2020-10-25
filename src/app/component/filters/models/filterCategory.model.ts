import { Filter } from './filter.model';
export interface FilterCategory {
  filter: Filter;
  filterCategoryNames: { name: string }[];
}
