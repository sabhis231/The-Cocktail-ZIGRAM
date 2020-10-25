import { Component, Input, OnInit } from '@angular/core';
import { FilterCategory } from './models/filterCategory.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input('queryFilterName') queryFilterName: string;
  @Input('queryFilter') queryFilter: string;
  @Input('filters') filters: FilterCategory[];

  isShow = false;
  constructor() {}

  ngOnInit(): void {}
}
