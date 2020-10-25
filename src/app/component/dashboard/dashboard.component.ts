import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FilterCategory } from './../filters/models/filterCategory.model';
import { FilterSandbox } from './../filters/sandbox/filter.sandox';
import { Drink } from './models/drink.model';
import { DashboardSandbox } from './sandbox/dashboard.sandbox';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  drinks: Drink[] = [];
  queryFilter: string = '';
  queryFilterName: string = '';
  filters: FilterCategory[] = [];
  successFilter: boolean = false;
  isEmpty: boolean = false;

  constructor(
    private dashboardSandbox: DashboardSandbox,
    private route: ActivatedRoute,
    private filterSandbox: FilterSandbox
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: Params) => {
      this.queryFilter = params.params.filter;
      this.queryFilterName = params.params.filterName;
      if (
        this.queryFilter &&
        this.queryFilterName &&
        this.queryFilterName != '' &&
        this.queryFilter != ''
      ) {
        this.dashboardSandbox.loadFilteredData({
          code: this.queryFilterName,
          category: this.queryFilter,
        });
      }
    });
    this.filterSandbox.fetchAllFilter();
    this.filterSandbox.getAllFilter().subscribe((resData) => {
      this.filters = resData.filter;
      if (this.filters.length == 4) {
        this.successFilter = true;
      }
    });
    this.dashboardSandbox.getAllData().subscribe((resData) => {
      this.drinks = resData.drinks;
      console.log(resData);
      if (this.drinks.length < 1) {
        this.isEmpty = true;
      }else {
        this.isEmpty = false;
      }
    });
  }

  selectedFilter(filter) {
    // this.dashboardSandbox.loadFilteredData({
    //   code: filter['code'],
    //   category: filter['filter']['name'],
    // });
  }
}
