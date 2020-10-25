import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { FilterCategory } from './models/filterCategory.model';
import { FilterSandbox } from './sandbox/filter.sandox';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input('queryFilterName') queryFilterName: string;
  @Input('queryFilter') queryFilter: string;
  @Output('selectedFilterData') selectedFilterData = new EventEmitter<{
    filter: { name: string };
    code: string;
  }>();

  @ViewChild(MatAccordion) accordion: MatAccordion;

  isShow = false;
  filters: FilterCategory[] = [];
  constructor(private filterSandbox: FilterSandbox) {}

  ngOnInit(): void {
    this.filterSandbox.fetchAllFilter();
    this.filterSandbox.getAllFilter().subscribe((resData) => {
      // console.log(resData);
      this.filters = resData.filter;
    });
  }

  onSelectedFilterCategory(selectedFilter: { name: string }, code: any) {
    this.selectedFilterData.emit({ filter: selectedFilter, code: code });
  }

  filterCat(index) {
    console.log(index);
  }
}
