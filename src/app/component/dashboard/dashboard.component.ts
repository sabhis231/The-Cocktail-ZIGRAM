import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModelBoxService } from '../model-box/services/model-box.service';
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
  filterCode: string = null;

  constructor(
    private dashboardSandbox: DashboardSandbox,
    private route: ActivatedRoute,
    private filterSandbox: FilterSandbox,
    private modelBoxService: ModelBoxService
  ) {}

  ngOnInit(): void {
    this.filterSandbox.fetchAllFilter();
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
    this.filterSandbox.getAllFilter().subscribe((resData) => {
      this.filters = resData.filter;
      if (this.filters.length == 4 && !resData.isError) {
        this.successFilter = true;
      }
    });
    this.dashboardSandbox.getAllData().subscribe((resData) => {
      this.drinks = resData.drinks;
      if (this.drinks.length < 1) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }
      this.filterCode = resData.setFilterCode;
    });
  }

  selectedDrink(drinkId) {
    this.dashboardSandbox.loadDringDetails(drinkId);
    this.modelBoxService.openDialog();
  }
}
