import { Drink } from './models/drink.model';
import { DashboardSandbox } from './sandbox/dashboard.sandbox';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  drinks: Drink[] = [];
  queryFilter:string='';
  queryFilterName:string=''
  constructor(
    private dashboardSandbox: DashboardSandbox,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let querydata = this.route.queryParamMap.subscribe((params:Params) => {
      console.log(params.params)
      console.log(params.params.filter);
      this.queryFilter=params.params.filter;
      this.queryFilterName=params.params.filterName
      console.log(params.params.filterName);
    });
    console.log(querydata);
    this.dashboardSandbox.getAllData().subscribe((resData) => {
      this.drinks = resData.drinks;
    });
  }

  selectedFilter(filter) {
    this.dashboardSandbox.loadFilteredData({
      code: filter['code'],
      category: filter['filter']['name'],
    });
  }
}
